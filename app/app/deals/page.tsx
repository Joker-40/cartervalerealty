import { pipelineLeads } from '@/lib/mock-data';
import { PipelineBoard } from '@/modules/workspace/pipeline-board';

export default function DealsPage() {
  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Deals</span>
        <h2 className="mt-4 text-3xl text-primary">Kanban pipeline for active opportunities</h2>
      </div>
      <PipelineBoard initialItems={pipelineLeads} />
    </div>
  );
}
