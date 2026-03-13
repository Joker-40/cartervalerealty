import type { MessageThread } from '@/lib/types';

export function MessageCenter({ threads }: { threads: MessageThread[] }) {
  const active = threads[0];

  return (
    <div className="grid gap-6 lg:grid-cols-[340px_minmax(0,1fr)]">
      <aside className="dashboard-card p-4">
        <h3 className="px-2 text-lg font-semibold text-primary">Conversations</h3>
        <div className="mt-4 space-y-2">
          {threads.map((thread) => (
            <article
              key={thread.id}
              className={`rounded-2xl border px-4 py-4 ${
                thread.id === active.id ? 'border-primary/20 bg-primary/5' : 'border-stroke/60 bg-panel/40'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="font-semibold text-primary">{thread.sender}</p>
                <span className="text-xs uppercase tracking-[0.18em] text-muted">{thread.sentAt}</span>
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.18em] text-accent">{thread.property}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{thread.preview}</p>
            </article>
          ))}
        </div>
      </aside>
      <section className="dashboard-card p-6">
        <p className="text-xs uppercase tracking-[0.18em] text-muted">Active thread</p>
        <h3 className="mt-3 text-3xl text-primary">{active.sender}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-muted">
          {active.preview} We have compiled the latest pricing deck, tenant improvement summary, and showing windows.
          Replying is intentionally mocked in this frontend-first phase, but the conversation layout is ready for real
          messaging integration.
        </p>
        <div className="mt-8 rounded-[24px] border border-dashed border-stroke/80 bg-panel/40 p-6 text-sm leading-7 text-muted">
          Message composer placeholder: wire this panel to the future JWT-authenticated messaging service in phase 3.
        </div>
      </section>
    </div>
  );
}
