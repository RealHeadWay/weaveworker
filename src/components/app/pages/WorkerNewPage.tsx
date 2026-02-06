import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const WorkerNewPage = () => {
  return (
    <AppShell title="Hire a Worker" subtitle="Define role, SOPs, and guardrails.">
      <Card className="bg-slate-900/60">
        <CardHeader>
          <CardTitle>Worker Builder</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-300 space-y-3">
          <p>Create a specialist with a title, job description, and tools.</p>
          <ul className="list-disc pl-4 text-slate-400">
            <li>Role & responsibilities</li>
            <li>System prompt and SOP library</li>
            <li>Approval boundaries for sensitive actions</li>
          </ul>
          <p className="text-xs uppercase tracking-widest text-emerald-300">Coming soon</p>
        </CardContent>
      </Card>
    </AppShell>
  );
};
