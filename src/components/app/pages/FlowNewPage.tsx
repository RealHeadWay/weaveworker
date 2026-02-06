import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const FlowNewPage = () => {
  return (
    <AppShell title="New Flow" subtitle="Import or create a workflow JSON blueprint.">
      <Card className="bg-slate-900/60">
        <CardHeader>
          <CardTitle>n8n Import</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-300 space-y-3">
          <p>Connect an n8n instance and import workflow JSON.</p>
          <ul className="list-disc pl-4 text-slate-400">
            <li>Validate connection</li>
            <li>Version workflow snapshots</li>
            <li>Configure triggers and approvals</li>
          </ul>
          <p className="text-xs uppercase tracking-widest text-emerald-300">Coming soon</p>
        </CardContent>
      </Card>
    </AppShell>
  );
};
