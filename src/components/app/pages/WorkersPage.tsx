import React from 'react';
import { Activity, Play } from 'lucide-react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';
import { cn } from '@/lib/utils';

const metrics = [
  { label: 'Active Nodes', value: '0', sublabel: '0 / 0' },
  { label: 'Total Ops', value: '14.2k', sublabel: 'Last 24 hours' },
  { label: 'Uptime', value: '99.9%', sublabel: 'Green status' },
];

const feed = [
  '[10:42:01] Initiating handshake sequence...',
  '[10:42:03] GET /api/v1/market-data',
  '[10:42:04] Processing batch #4402...',
  '[10:42:05] SUCCESS Record indexed',
  '[10:42:06] Worker “market-scout” requesting resources...',
];

export const WorkersPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell
      title="Workers"
      subtitle="The specialists you've hired for your recurring work."
      breadcrumbs={['Workers']}
    >
      <div className="space-y-10">
        <Card className="bg-white/5 border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
          <CardHeader className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-300">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-xl">System Status: Operational</CardTitle>
                <p className="text-sm text-slate-400">Fleet operating at peak capacity</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span className="uppercase tracking-[0.4em]">Global processing load</span>
              <span className="text-slate-200">85%</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-1">
              {Array.from({ length: 36 }).map((_, index) => (
                <div
                  key={index}
                  className={cn(
                    'h-4 w-2 rounded-sm',
                    index < 30 ? 'bg-emerald-200/90' : 'bg-white/10'
                  )}
                />
              ))}
              <div className="ml-auto text-xs text-slate-500">85%</div>
            </div>
            <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-2xl font-semibold text-white">{metric.value}</p>
                    <p className="text-xs text-slate-500">{metric.sublabel}</p>
                  </div>
                ))}
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="uppercase tracking-[0.4em]">Live feed</span>
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400" />
                    <span className="h-2 w-2 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="mt-4 space-y-2 text-xs text-slate-400">
                  {feed.map((item) => (
                    <p key={item} className="font-mono">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Active Fleet Matrix</p>
          <div className="grid gap-6 lg:grid-cols-[1.2fr_2fr]">
            <div className="rounded-2xl border border-dashed border-white/10 bg-black/30 p-8 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/50">
                <Play className="h-5 w-5 text-slate-400" />
              </div>
              <p className="mt-4 text-sm font-semibold">Deploy New Worker</p>
              <p className="text-xs text-slate-500">From template library</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {data.workers.map((worker) => (
                <div key={worker.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{worker.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{worker.jobDescription}</p>
                  <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    <span>Projects: {worker.assignedProjectIds.length}</span>
                    <a className="text-emerald-300" href={`/workers/${worker.id}`}>
                      View profile →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
};
