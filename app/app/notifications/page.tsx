import { notifications } from '@/lib/mock-data';

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Notifications</span>
        <h2 className="mt-4 text-3xl text-primary">Priority alerts and deal activity</h2>
      </div>
      <div className="grid gap-4">
        {notifications.map((notification) => (
          <article key={notification.id} className="dashboard-card p-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-lg font-semibold text-primary">{notification.title}</p>
                <p className="mt-2 text-sm leading-7 text-muted">{notification.detail}</p>
              </div>
              <span className="rounded-full bg-panel px-3 py-2 text-xs uppercase tracking-[0.18em] text-muted">{notification.time}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
