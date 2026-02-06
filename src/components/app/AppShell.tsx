import React, { useMemo } from 'react';
import { Settings } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useWeaveworker } from '@/state/weaveworker-store';
import { cn } from '@/lib/utils';

const navSections = [
  {
    label: 'Platform',
    value: 'platform',
    items: [
      { label: 'Command Center', href: '/' },
      { label: 'System Overview', href: '/' },
      { label: 'Fleet Terminal', href: '/threads/overview' },
      { label: 'Active Fleet', href: '/workers' },
      { label: 'Saved Workers', href: '/workers' },
      { label: 'Queue / Jobs', href: '/operations' },
      { label: 'Intelligence Feed', href: '/operations' },
    ],
  },
  {
    label: 'The Workshop',
    value: 'workshop',
    items: [
      { label: 'Agent Library', href: '/workers' },
      { label: 'Forge (Custom)', href: '/workers/new' },
    ],
  },
  {
    label: 'Teams + Admin',
    value: 'admin',
    items: [
      { label: 'Control Panel', href: '/settings' },
      { label: 'Identity', href: '/settings' },
      { label: 'AI Engine', href: '/settings' },
      { label: 'n8n Integration', href: '/flows' },
      { label: 'Registry (MD)', href: '/assets' },
      { label: 'System Logs', href: '/operations' },
    ],
  },
  {
    label: 'Projects',
    value: 'projects',
    items: [
      { label: 'Active Operations', href: '/operations' },
      { label: 'gfghfk', href: '/projects/project-002' },
      { label: 'Knowledge Base', href: '/assets' },
      { label: 'New Workspace', href: '/projects' },
    ],
  },
];

interface AppShellProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export const AppShell = ({ title, subtitle, children }: AppShellProps) => {
  const { data, syncStatus } = useWeaveworker();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const statusPill = useMemo(() => {
    const labelMap: Record<string, string> = {
      offline: 'Offline-first',
      syncing: 'Syncing',
      online: 'Live sync',
    };
    const colorMap: Record<string, string> = {
      offline: 'bg-amber-500/20 text-amber-200 border-amber-500/40',
      syncing: 'bg-blue-500/20 text-blue-200 border-blue-500/40',
      online: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/40',
    };

    return (
      <span
        className={cn(
          'text-xs font-semibold px-3 py-1 rounded-full border',
          colorMap[syncStatus]
        )}
      >
        {labelMap[syncStatus]}
      </span>
    );
  }, [syncStatus]);

  return (
    <div className="min-h-screen bg-[#0c0d0f] text-slate-100">
      <div className="grid lg:grid-cols-[270px_1fr]">
        <aside className="border-r border-slate-800/60 px-6 py-8 hidden lg:flex lg:flex-col gap-8 bg-[#0b0c0e]">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-200 flex items-center justify-center text-lg">
              ⌘
            </div>
            <div>
              <p className="text-sm text-slate-200">Weaveworker</p>
              <p className="text-xs text-slate-400">Boss Console</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 text-sm">
            <Accordion type="multiple" defaultValue={navSections.map((section) => section.value)}>
              {navSections.map((section) => (
                <AccordionItem key={section.value} value={section.value}>
                  <AccordionTrigger>{section.label}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1">
                      {section.items.map((item) => {
                        const isActive = currentPath === item.href || currentPath.startsWith(`${item.href}/`);
                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            className={cn(
                              'flex items-center justify-between rounded-lg px-3 py-2 text-[13px] font-medium transition',
                              isActive
                                ? 'bg-slate-800/70 text-white'
                                : 'text-slate-300 hover:bg-slate-900/70 hover:text-white'
                            )}
                          >
                            {item.label}
                            {item.label === 'Control Panel' && data.entitlements.tier === 'free' ? (
                              <span className="text-[10px] uppercase tracking-widest text-amber-300">
                                Pro
                              </span>
                            ) : null}
                          </a>
                        );
                      })}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </nav>
          <div className="mt-auto flex items-center justify-between rounded-xl border border-slate-800/70 bg-slate-900/40 p-4">
            <div>
              <p className="text-xs text-slate-400">{data.account.profile.name}</p>
              <p className="text-xs text-slate-500">{data.account.profile.email}</p>
            </div>
            <span className="text-xs rounded-full bg-slate-800 px-3 py-1">CN</span>
          </div>
        </aside>
        <main className="px-6 py-6 lg:px-10">
          <div className="flex items-center justify-between border border-slate-800/60 rounded-xl bg-gradient-to-b from-slate-950/80 to-slate-900/60 px-5 py-3 panel-shadow">
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800/70">
                ⌘
              </span>
              <span className="text-slate-500">|</span>
              <span className="text-slate-300 text-xs">Weaveworker</span>
              <span className="text-slate-500">›</span>
              <span className="text-slate-200 text-xs">{title}</span>
            </div>
            <div className="flex items-center gap-3">
              {statusPill}
              <a
                className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
                href="/account"
              >
                Manage Plan
              </a>
              <button
                className="h-8 w-8 rounded-full border border-slate-800/60 flex items-center justify-center text-slate-400"
                type="button"
              >
                <Settings className="h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 pt-6">
            <header className="flex flex-col gap-2">
              <h2 className="text-[40px] font-normal tracking-tight">{title}</h2>
              {subtitle ? <p className="text-sm text-slate-400">{subtitle}</p> : null}
            </header>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
