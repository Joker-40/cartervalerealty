import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { getWorkspaceSession, normalizeWorkspaceRedirect, workspaceDemoCredentials } from '@/lib/auth';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Mock JWT login screen for the Carter & Vale broker workspace.',
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams?: {
    error?: string | string[];
    next?: string | string[];
  };
}) {
  const session = await getWorkspaceSession();
  const error = Array.isArray(searchParams?.error) ? searchParams?.error[0] : searchParams?.error;
  const nextParam = Array.isArray(searchParams?.next) ? searchParams?.next[0] : searchParams?.next;

  if (session) {
    redirect(normalizeWorkspaceRedirect(nextParam));
  }

  const hasError = error === 'invalid';
  const next = normalizeWorkspaceRedirect(nextParam);

  return (
    <div className="mx-auto flex min-h-[70vh] max-w-content items-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid w-full gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="surface-card p-10">
          <span className="eyebrow">JWT auth seam</span>
          <h1 className="mt-5 text-5xl text-primary">Broker workspace access</h1>
          <p className="mt-5 text-sm leading-7 text-muted">
            This frontend ships with a mock authentication seam so phase 2 can evolve into a full JWT-backed broker
            login without replacing the shell or route structure.
          </p>
          <div className="mt-8 rounded-[24px] border border-stroke/70 bg-panel/50 p-5 text-sm leading-7 text-muted">
            <p className="font-semibold text-primary">Demo credentials</p>
            <p className="mt-3">
              Email: <span className="font-mono text-primary">{workspaceDemoCredentials.email}</span>
            </p>
            <p>
              Password: <span className="font-mono text-primary">{workspaceDemoCredentials.password}</span>
            </p>
          </div>
        </div>
        <div className="surface-card p-10">
          <h2 className="text-3xl text-primary">Sign in</h2>
          <form action="/api/auth/login" method="post" className="mt-6 space-y-4">
            <input type="hidden" name="next" value={next} />
            <label className="block text-sm text-muted">
              Email
              <input
                name="email"
                defaultValue={workspaceDemoCredentials.email}
                className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none"
                placeholder="broker@cartervalerealty.com"
              />
            </label>
            <label className="block text-sm text-muted">
              Password
              <input
                type="password"
                name="password"
                defaultValue={workspaceDemoCredentials.password}
                className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none"
                placeholder="••••••••"
              />
            </label>
            {hasError ? (
              <p className="rounded-2xl border border-danger/20 bg-danger/10 px-4 py-3 text-sm text-danger">
                Invalid credentials. Use the demo broker credentials shown on this page.
              </p>
            ) : null}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-gold"
            >
              Enter workspace
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
