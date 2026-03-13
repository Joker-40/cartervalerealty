const WORKSPACE_DEFAULT_REDIRECT = '/app/dashboard';

export const workspaceDemoCredentials = {
  email: (process.env.WORKSPACE_DEMO_EMAIL ?? 'broker@cartervalerealty.com').toLowerCase(),
  password: process.env.WORKSPACE_DEMO_PASSWORD ?? 'BrokerAccess2026!',
};

export function normalizeWorkspaceRedirect(value: string | null | undefined) {
  if (!value) return WORKSPACE_DEFAULT_REDIRECT;
  if (!value.startsWith('/app')) return WORKSPACE_DEFAULT_REDIRECT;
  return value;
}

export function validateWorkspaceCredentials(email: string, password: string) {
  return (
    email.trim().toLowerCase() === workspaceDemoCredentials.email &&
    password === workspaceDemoCredentials.password
  );
}
