import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

interface WorkerDetailPageProps {
  workerId: string;
}

export const WorkerDetailPage = ({ workerId }: WorkerDetailPageProps) => {
  const { data } = useWeaveworker();
  const worker = data.workers.find((item) => item.id === workerId) ?? data.workers[0];

  if (!worker) {
    return (
      <AppShell title="Worker" subtitle="Worker not found.">
        <p className="text-slate-400">Select a valid worker.</p>
      </AppShell>
    );
  }

  return (
    <AppShell title={worker.title} subtitle={worker.jobDescription}>
      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Persona & SOPs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm text-slate-300">
            <p>{worker.persona}</p>
            <ul className="list-disc pl-4">
              {worker.sops.map((sop) => (
                <li key={sop}>{sop}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Memory Configuration</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            <p>Retention: {worker.memory.retentionDays} days</p>
            <p>Assets: {worker.memory.rememberAssets ? 'Enabled' : 'Disabled'}</p>
            <p>Threads: {worker.memory.rememberThreads ? 'Enabled' : 'Disabled'}</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};
