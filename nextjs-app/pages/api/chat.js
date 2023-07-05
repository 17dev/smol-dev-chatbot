import { NextApiRequest, NextApiResponse } from 'next';
import { getSession } from 'next-auth/client';
import { connectDatabase, createChat, editChat, deleteChat } from '../../utils/database';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  await connectDatabase();

  switch (req.method) {
    case 'POST':
      try {
        const chat = await createChat(req.body);
        return res.status(200).json({ chat });
      } catch (error) {
        return res.status(500).json({ error: 'Unable to create chat' });
      }

    case 'PUT':
      try {
        const chat = await editChat(req.body);
        return res.status(200).json({ chat });
      } catch (error) {
        return res.status(500).json({ error: 'Unable to edit chat' });
      }

    case 'DELETE':
      try {
        await deleteChat(req.body);
        return res.status(200).json({ message: 'Chat deleted successfully' });
      } catch (error) {
        return res.status(500).json({ error: 'Unable to delete chat' });
      }

    default:
      return res.status(405).json({ error: 'Method not allowed' });
  }
}