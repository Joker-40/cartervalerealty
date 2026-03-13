import 'server-only';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { normalizeWorkspaceRedirect, validateWorkspaceCredentials, workspaceDemoCredentials } from '@/lib/auth-utils';

const WORKSPACE_SESSION_COOKIE = 'cvr_workspace_session';

export interface WorkspaceSession {
  email: string;
  name: string;
  role: string;
  initials: string;
}

function buildWorkspaceSession(): WorkspaceSession {
  return {
    email: workspaceDemoCredentials.email,
    name: 'Evelyn Carter',
    role: 'Managing Broker',
    initials: 'EC',
  };
}

export async function getWorkspaceSession(): Promise<WorkspaceSession | null> {
  const cookieStore = cookies();
  const hasSession = cookieStore.get(WORKSPACE_SESSION_COOKIE)?.value === 'active';
  return hasSession ? buildWorkspaceSession() : null;
}

export function applyWorkspaceSession(response: NextResponse) {
  response.cookies.set({
    name: WORKSPACE_SESSION_COOKIE,
    value: 'active',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });
}

export function clearWorkspaceSession(response: NextResponse) {
  response.cookies.set({
    name: WORKSPACE_SESSION_COOKIE,
    value: '',
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 0,
  });
}

export { normalizeWorkspaceRedirect, validateWorkspaceCredentials, workspaceDemoCredentials };
