export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <span className="eyebrow">Settings</span>
        <h2 className="mt-4 text-3xl text-primary">Profile, notification, and integration preferences</h2>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        <section className="dashboard-card p-6">
          <h3 className="text-2xl text-primary">Broker profile</h3>
          <div className="mt-6 space-y-4">
            <label className="block text-sm text-muted">
              Display name
              <input defaultValue="Evelyn Carter" className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none" />
            </label>
            <label className="block text-sm text-muted">
              Role
              <input defaultValue="Managing Broker" className="mt-2 w-full rounded-2xl border border-stroke/70 bg-panel/40 px-4 py-3 text-primary outline-none" />
            </label>
          </div>
        </section>
        <section className="dashboard-card p-6">
          <h3 className="text-2xl text-primary">Integration seams</h3>
          <div className="mt-6 space-y-4 text-sm leading-7 text-muted">
            <p>Maps provider: ready for Google Maps API</p>
            <p>Analytics provider: ready for Google Analytics</p>
            <p>Media provider: ready for S3-compatible storage</p>
            <p>Auth provider: ready for JWT issuer configuration</p>
          </div>
        </section>
      </div>
    </div>
  );
}
