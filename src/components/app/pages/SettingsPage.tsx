import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const SettingsPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Settings" subtitle="Local preferences and integrations.">
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Local Settings</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            <p>Theme: {data.account.localSettings.theme}</p>
            <p>Offline mode: {data.account.localSettings.offlineMode ? 'Enabled' : 'Disabled'}</p>
            <p>Feature flags: {data.account.localSettings.featureFlags.join(', ')}</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Integrations</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            {data.integrations.map((integration) => (
              <div key={integration.id} className="flex items-center justify-between">
                <span>{integration.name}</span>
                <span className="text-xs uppercase text-slate-500">{integration.type}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};
