import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureGate } from '@/components/app/FeatureGate';
import { useWeaveworker } from '@/state/weaveworker-store';

export const DashboardPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell
      title="Dashboard"
      subtitle="Overview of projects, workers, and automation runs."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Active Projects</CardTitle>
            <CardDescription>Teams and personal workspaces.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{data.projects.length}</p>
            <p className="text-sm text-slate-400">{data.projects.filter((p) => p.status === 'active').length} active</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Workers</CardTitle>
            <CardDescription>Specialists ready to execute.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{data.workers.length}</p>
            <p className="text-sm text-slate-400">{data.tasks.filter((t) => t.status === 'assigned').length} tasks assigned</p>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Automation Runs</CardTitle>
            <CardDescription>Latest operations today.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-semibold">{data.operations.length}</p>
            <p className="text-sm text-slate-400">{data.operations.filter((o) => o.status === 'succeeded').length} succeeded</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Live Operations Feed</CardTitle>
            <CardDescription>Recent automation activity.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3 text-sm text-slate-300">
              {data.operations.map((operation) => (
                <li key={operation.id} className="flex items-center justify-between">
                  <span>{operation.flowId}</span>
                  <span className="text-xs uppercase text-emerald-300">{operation.status}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Upcoming Approvals</CardTitle>
            <CardDescription>Flows waiting on human sign-off.</CardDescription>
          </CardHeader>
          <CardContent>
            <FeatureGate
              feature="approvals"
              fallback={<p className="text-sm text-slate-400">Upgrade to Pro to enable approval gates.</p>}
            >
              <ul className="space-y-3 text-sm text-slate-300">
                {data.flows.map((flow) => (
                  <li key={flow.id} className="flex items-center justify-between">
                    <span>{flow.name}</span>
                    <span className="text-xs text-amber-300">Approval required</span>
                  </li>
                ))}
              </ul>
            </FeatureGate>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};
