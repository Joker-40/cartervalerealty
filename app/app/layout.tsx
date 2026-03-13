import type { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import { getWorkspaceSession } from '@/lib/auth';
import { PlatformShell } from '@/modules/layout/platform-shell';

export default async function WorkspaceLayout({ children }: { children: ReactNode }) {
  const session = await getWorkspaceSession();

  if (!session) {
    redirect('/login?next=%2Fapp%2Fdashboard');
  }

  return (
    <PlatformShell
      title="Broker Workspace"
      description="Monitor listings, lead velocity, revenue trends, and client conversations from one premium operating dashboard."
      quickActionHref="/app/listings"
      quickActionLabel="Add listing"
      sessionLabel={`${session.name} · ${session.role}`}
    >
      {children}
    </PlatformShell>
  );
}
