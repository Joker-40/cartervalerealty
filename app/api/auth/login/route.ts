import { NextResponse } from 'next/server';
import {
  applyWorkspaceSession,
  normalizeWorkspaceRedirect,
  validateWorkspaceCredentials,
} from '@/lib/auth';

export async function POST(request: Request) {
  const formData = await request.formData();
  const email = String(formData.get('email') ?? '');
  const password = String(formData.get('password') ?? '');
  const next = normalizeWorkspaceRedirect(formData.get('next')?.toString());

  if (!validateWorkspaceCredentials(email, password)) {
    return NextResponse.redirect(new URL(`/login?error=invalid&next=${encodeURIComponent(next)}`, request.url), {
      status: 303,
    });
  }

  const response = NextResponse.redirect(new URL(next, request.url), {
    status: 303,
  });
  applyWorkspaceSession(response);
  return response;
}
