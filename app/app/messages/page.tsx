import { messageThreads } from '@/lib/mock-data';
import { MessageCenter } from '@/modules/workspace/message-center';

export default function MessagesPage() {
  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Messages</span>
        <h2 className="mt-4 text-3xl text-primary">Client and prospect conversations</h2>
      </div>
      <MessageCenter threads={messageThreads} />
    </div>
  );
}
