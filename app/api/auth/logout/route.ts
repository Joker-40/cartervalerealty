import { NextResponse } from 'next/server';
import { clearWorkspaceSession } from '@/lib/auth';

export async function GET(request: Request) {
  const response = NextResponse.redirect(new URL('/login', request.url));
  clearWorkspaceSession(response);
  return response;
}
