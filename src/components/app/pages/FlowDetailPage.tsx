import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

interface FlowDetailPageProps {
  flowId: string;
}

export const FlowDetailPage = ({ flowId }: FlowDetailPageProps) => {
  const { data } = useWeaveworker();
  const flow = data.flows.find((item) => item.id === flowId) ?? data.flows[0];

  if (!flow) {
    return (
      <AppShell title="Flow" subtitle="Flow not found.">
        <p className="text-slate-400">Select a valid flow.</p>
      </AppShell>
    );
  }

  return (
    <AppShell title={flow.name} subtitle={flow.description}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Triggers</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            {flow.triggers.map((trigger) => (
              <div key={trigger}>{trigger}</div>
            ))}
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Inputs Schema</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-slate-400 whitespace-pre-wrap">
            {flow.inputsSchema}
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};
