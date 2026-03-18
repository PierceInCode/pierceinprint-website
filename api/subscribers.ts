// api/subscribers.ts — GET /api/subscribers?key=YOUR_ADMIN_SECRET
// Returns the full subscriber list as JSON.
// Protected by a secret key stored in the ADMIN_SECRET environment variable.

import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Accept the secret via query param or header
  const secret = req.query.key ?? req.headers['x-admin-secret'];

  if (!process.env.ADMIN_SECRET || secret !== process.env.ADMIN_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  // Fetch all subscribers: { email: timestamp, ... }
  const subscribers = await kv.hgetall<Record<string, string>>('subscribers');

  return res.status(200).json({
    count: subscribers ? Object.keys(subscribers).length : 0,
    subscribers: subscribers ?? {},
  });
}
