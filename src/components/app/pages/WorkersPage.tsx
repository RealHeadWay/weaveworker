import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const WorkersPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Workers" subtitle="The specialists you've hired for your recurring work.">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="bg-[#0f1114] border border-slate-800/70 panel-shadow">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-300 flex items-center justify-center">
                〽
              </div>
              <div>
                <CardTitle className="text-lg font-semibold">System Status: Operational</CardTitle>
                <CardDescription className="text-sm">Fleet operating at peak capacity</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-slate-500">
                <span>Global Processing Load</span>
                <span className="text-slate-300">85%</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {Array.from({ length: 32 }).map((_, index) => (
                  <span
                    key={index}
                    className={index < 26 ? 'h-3 w-3 rounded-sm bg-emerald-200/90' : 'h-3 w-3 rounded-sm bg-slate-800'}
                  />
                ))}
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 text-sm">
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Active Nodes</p>
                <p className="text-2xl font-semibold">0</p>
                <p className="text-[10px] text-slate-500">/ 0</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Total Ops</p>
                <p className="text-2xl font-semibold">14.2k</p>
              </div>
              <div className="rounded-xl border border-slate-800/70 bg-slate-900/50 p-4">
                <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Uptime</p>
                <p className="text-2xl font-semibold text-emerald-300">99.9%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#0f1114] border border-slate-800/70 panel-shadow">
          <CardHeader>
            <CardTitle className="text-[10px] uppercase tracking-[0.3em] text-slate-500">Live Feed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-xs text-slate-400 font-mono">
            {data.operations.map((operation, index) => (
              <div key={operation.id} className="flex items-center justify-between">
                <span>[10:42:0{index}] Worker '{operation.flowId}' requesting resources...</span>
                <span className="text-slate-500">{index * 10 + 2}ms</span>
              </div>
            ))}
            <div className="flex items-center justify-between text-emerald-300">
              <span>[10:42:05] SUCCESS Record indexed.</span>
              <span className="text-slate-500">OK</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-[10px] uppercase tracking-[0.4em] text-center text-slate-500">Active Fleet Matrix</div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Card className="bg-[#0f1114] border border-dashed border-slate-800/70 flex items-center justify-center h-64">
          <CardContent className="text-center text-sm text-slate-400 space-y-3">
            <div className="mx-auto h-12 w-12 rounded-full border border-slate-700 flex items-center justify-center text-slate-500">
              ▶
            </div>
            <p className="text-slate-200 font-semibold">Deploy New Worker</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.3em]">From Template Library</p>
          </CardContent>
        </Card>
        <div className="grid gap-4">
          {data.workers.map((worker) => (
            <Card key={worker.id} className="bg-[#0f1114] border border-slate-800/70">
              <CardHeader>
                <CardTitle>{worker.title}</CardTitle>
                <CardDescription>{worker.jobDescription}</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-400 space-y-2">
                <p>Projects: {worker.assignedProjectIds.length}</p>
                <p>Memory retention: {worker.memory.retentionDays} days</p>
                <a className="text-emerald-300" href={`/workers/${worker.id}`}>
                  Open profile →
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AppShell>
  );
};
