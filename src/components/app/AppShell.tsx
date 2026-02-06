import React, { useMemo } from 'react';
import {
  Boxes,
  Briefcase,
  Cable,
  Command,
  Database,
  FileText,
  Layers3,
  LifeBuoy,
  ListChecks,
  Settings,
  Users,
  Workflow,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { useWeaveworker } from '@/state/weaveworker-store';
import { cn } from '@/lib/utils';

const navSections = [
  {
    label: 'Platform',
    items: [
      { label: 'Command Center', href: '/', icon: Command },
      { label: 'System Overview', href: '/projects', icon: Layers3 },
      { label: 'Fleet Terminal', href: '/threads/overview', icon: ListChecks },
      { label: 'Active Fleet', href: '/workers', icon: Users },
      { label: 'Saved Workers', href: '/workers', icon: Briefcase },
      { label: 'Queue / Jobs', href: '/operations', icon: Workflow },
      { label: 'Intelligence Feed', href: '/assets', icon: FileText },
    ],
  },
  {
    label: 'The Workshop',
    items: [
      { label: 'Agent Library', href: '/workers', icon: Boxes },
      { label: 'Forge (Custom)', href: '/flows', icon: Cable },
    ],
  },
  {
    label: 'Control Panel',
    items: [
      { label: 'Identity', href: '/account', icon: Users },
      { label: 'AI Engine', href: '/settings', icon: Settings },
      { label: 'n8n Integration', href: '/flows', icon: Workflow },
      { label: 'Registry (MD)', href: '/assets', icon: Database },
      { label: 'System Logs', href: '/operations', icon: FileText },
    ],
  },
  {
    label: 'Projects',
    items: [
      { label: 'Active Operations', href: '/projects', icon: Layers3 },
      { label: 'Knowledge Base', href: '/assets', icon: Database },
      { label: 'New Workspace', href: '/projects', icon: Briefcase },
    ],
  },
];

interface AppShellProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: string[];
  children: React.ReactNode;
}

export const AppShell = ({ title, subtitle, breadcrumbs, children }: AppShellProps) => {
  const { data, syncStatus } = useWeaveworker();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const statusPill = useMemo(() => {
    const labelMap: Record<string, string> = {
      offline: 'Offline',
      syncing: 'Syncing',
      online: 'Operational',
    };
    const colorMap: Record<string, string> = {
      offline: 'bg-amber-500/20 text-amber-200 border-amber-500/40',
      syncing: 'bg-blue-500/20 text-blue-200 border-blue-500/40',
      online: 'bg-emerald-500/20 text-emerald-200 border-emerald-500/40',
    };

    return (
      <span
        className={cn(
          'text-xs font-semibold px-3 py-1 rounded-full border backdrop-blur',
          colorMap[syncStatus]
        )}
      >
        {labelMap[syncStatus]}
      </span>
    );
  }, [syncStatus]);

  return (
    <div className="min-h-screen bg-[#0a0b0f] text-slate-100">
      <div className="grid lg:grid-cols-[270px_1fr]">
        <aside className="border-r border-white/5 bg-black/20 px-6 py-8 hidden lg:flex lg:flex-col gap-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-200">
              <Command className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Weaveworker</p>
              <p className="text-xs text-slate-400">Boss Console</p>
            </div>
          </div>
          <nav className="flex flex-col gap-6 text-sm">
            {navSections.map((section) => (
              <div key={section.label} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {section.label}
                </span>
                {section.items.map((item) => {
                  const isActive = currentPath === item.href || currentPath.startsWith(`${item.href}/`);
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'flex items-center gap-3 rounded-lg px-3 py-2 font-medium transition',
                        isActive
                          ? 'bg-white/5 text-white'
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      )}
                    >
                      <Icon className="h-4 w-4 text-slate-400" />
                      <span className="flex-1">{item.label}</span>
                      {item.label === 'Identity' && data.entitlements.tier === 'free' ? (
                        <span className="text-[10px] uppercase tracking-widest text-amber-300">Pro</span>
                      ) : null}
                    </a>
                  );
                })}
              </div>
            ))}
          </nav>
          <div className="mt-auto rounded-xl border border-white/5 bg-white/5 p-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Signed in</span>
              {statusPill}
            </div>
            <p className="mt-2 text-sm font-semibold">{data.account.profile.name}</p>
            <p className="text-xs text-slate-500">{data.account.profile.email}</p>
          </div>
        </aside>
        <main className="px-6 py-6 lg:px-10 lg:py-8">
          <div className="rounded-2xl border border-white/5 bg-gradient-to-b from-white/5 via-transparent to-transparent p-6 lg:p-8">
            <header className="flex flex-col gap-6 border-b border-white/5 pb-6">
              <div className="flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg border border-white/5 bg-black/30 px-3 py-1">Weaveworker</div>
                  <span className="text-slate-600">/</span>
                  <span>{breadcrumbs?.join(' / ') ?? title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    className={cn(buttonVariants({ variant: 'secondary', size: 'sm' }))}
                    href="/account"
                  >
                    Manage Plan
                  </a>
                  <button className="rounded-lg border border-white/5 bg-black/30 p-2 text-slate-300">
                    <Settings className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
                {subtitle ? <p className="text-slate-400">{subtitle}</p> : null}
              </div>
            </header>
            <div className="pt-6">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};
