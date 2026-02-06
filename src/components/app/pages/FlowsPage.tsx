import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const FlowsPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Flows" subtitle="Automation blueprints powered by n8n.">
      <div className="flex items-center justify-between">
        <p className="text-sm text-slate-400">{data.flows.length} flows configured</p>
        <a href="/flows/new" className="text-emerald-300">Create flow →</a>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {data.flows.map((flow) => (
          <Card key={flow.id} className="bg-slate-900/60">
            <CardHeader>
              <CardTitle>{flow.name}</CardTitle>
              <CardDescription>{flow.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <p>Triggers: {flow.triggers.join(', ')}</p>
              <p>Version: v{flow.version}</p>
              <a className="text-emerald-300" href={`/flows/${flow.id}`}>
                Open flow →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
};
