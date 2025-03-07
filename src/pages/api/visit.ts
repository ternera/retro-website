import type { NextApiRequest, NextApiResponse } from 'next';

// NOTE: This in-memory count is for demonstration only.
// For production, use a database or persistent store.
let count = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    count++;
    res.status(200).json({ count });
  } else if (req.method === 'GET') {
    res.status(200).json({ count });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}