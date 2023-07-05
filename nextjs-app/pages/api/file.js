import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { File } from '../../models/file';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  if (req.method === 'POST') {
    const { name, type, size, path } = req.body;

    if (!name || !type || !size || !path) {
      return res.status(400).json({ message: 'Missing fields' });
    }

    const newFile = new File({
      name,
      type,
      size,
      path,
      user: session.user.email,
    });

    try {
      const savedFile = await newFile.save();
      return res.status(201).json(savedFile);
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  }

  if (req.method === 'GET') {
    try {
      const files = await File.find({ user: session.user.email });
      return res.status(200).json(files);
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'Missing id' });
    }

    try {
      await File.findByIdAndDelete(id);
      return res.status(200).json({ message: 'File deleted' });
    } catch (error) {
      return res.status(500).json({ message: 'Server error' });
    }
  }

  return res.status(405).json({ message: 'Method not allowed' });
}