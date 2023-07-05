import { NextApiRequest, NextApiResponse } from 'next';
import { connectDatabase, setupDatabase, manageConnection } from '../../utils/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const databases = await connectDatabase();
        res.status(200).json({ success: true, data: databases });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'POST':
      try {
        const database = await setupDatabase(req.body);
        res.status(201).json({ success: true, data: database });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case 'PUT':
      try {
        const database = await manageConnection(req.body);
        res.status(200).json({ success: true, data: database });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}