import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const OperationsPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Operations" subtitle="Execution history, approvals, and logs.">
      <div className="grid gap-6">
        {data.operations.map((operation) => (
          <Card key={operation.id} className="bg-slate-900/60">
            <CardHeader>
              <CardTitle>{operation.flowId}</CardTitle>
              <CardDescription>Status: {operation.status}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <p>Started: {operation.startedAt}</p>
              <p>Outputs: {operation.outputs.join(', ')}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
};
