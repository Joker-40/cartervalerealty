'use client';

import { useState } from 'react';
import type { LeadPipelineCard, WorkspaceStage } from '@/lib/types';
import { cn } from '@/lib/utils';

const stages: WorkspaceStage[] = ['New Inquiry', 'Contacted', 'Visit Scheduled', 'Negotiation', 'Closed'];

export function PipelineBoard({ initialItems }: { initialItems: LeadPipelineCard[] }) {
  const [items, setItems] = useState(initialItems);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  function moveCard(cardId: string, stage: WorkspaceStage) {
    setItems((current) => current.map((item) => (item.id === cardId ? { ...item, stage } : item)));
  }

  return (
    <div className="grid gap-4 xl:grid-cols-5">
      {stages.map((stage) => {
        const stageItems = items.filter((item) => item.stage === stage);

        return (
          <section
            key={stage}
            onDragOver={(event) => event.preventDefault()}
            onDrop={() => {
              if (draggingId) moveCard(draggingId, stage);
              setDraggingId(null);
            }}
            className="dashboard-card min-h-[240px] p-4"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{stage}</h3>
              <span className="rounded-full bg-panel px-3 py-1 text-xs font-medium text-muted">{stageItems.length}</span>
            </div>
            <div className="mt-4 space-y-3">
              {stageItems.map((item) => (
                <article
                  key={item.id}
                  draggable
                  onDragStart={() => setDraggingId(item.id)}
                  onDragEnd={() => setDraggingId(null)}
                  className={cn(
                    'rounded-2xl border border-stroke/70 bg-panel/50 p-4 shadow-sm transition',
                    draggingId === item.id && 'opacity-70',
                  )}
                >
                  <p className="text-sm font-semibold text-primary">{item.name}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">{item.property}</p>
                  <p className="mt-3 text-sm text-muted">{item.interest}</p>
                  <p className="mt-4 font-mono text-sm text-primary">{item.value}</p>
                </article>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
