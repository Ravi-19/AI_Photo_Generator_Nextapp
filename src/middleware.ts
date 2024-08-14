import { NextRequest, NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { kv } from '@vercel/kv';

const ratelimit = new Ratelimit({
  redis: kv,
  // 5 requests from the same IP in 10 seconds
  limiter: Ratelimit.slidingWindow(3, '1 h'),
});

// Define which routes you want to rate limit
export const config = {
  matcher: '/api/history/:user*',
};

export default async function middleware(request: NextRequest) {
    console.log('inside src middleware')
  // You could alternatively limit based on user ID or similar
  const ip = request.ip ? request.ip :   '127.0.0.1';
  const { success, pending, limit, reset, remaining } = await ratelimit.limit(
    ip
  );
  return success
    ? NextResponse.next()
    : NextResponse.redirect(new URL('/blocked', request.url));
}