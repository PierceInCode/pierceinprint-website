// api/subscribe.ts — POST /api/subscribe
// Validates an email address and stores it in Vercel KV (Redis).
// Prevents duplicate signups.

import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers — required for local `vercel dev`
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body ?? {};

  // Basic presence + format validation
  if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' });
  }

  const normalized = email.toLowerCase().trim();

  // Check for duplicate
  const existing = await kv.hexists('subscribers', normalized);
  if (existing) {
    return res.status(200).json({ status: 'already_subscribed' });
  }

  // Store email with timestamp
  await kv.hset('subscribers', { [normalized]: new Date().toISOString() });

  return res.status(200).json({ status: 'subscribed' });
}
