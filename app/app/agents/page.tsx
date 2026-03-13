import { getAgents } from '@/lib/mock-data';
import { AgentCard } from '@/modules/shared/agent-card';

export default function WorkspaceAgentsPage() {
  const agents = getAgents();

  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Agents</span>
        <h2 className="mt-4 text-3xl text-primary">Roster, experience, and listing ownership</h2>
      </div>
      <div className="grid gap-5 xl:grid-cols-2">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} />
        ))}
      </div>
    </div>
  );
}
