import React from 'react';
import { WeaveworkerProvider } from '@/state/weaveworker-store';
import { DashboardPage } from '@/components/app/pages/DashboardPage';
import { ProjectsPage } from '@/components/app/pages/ProjectsPage';
import { ProjectDetailPage } from '@/components/app/pages/ProjectDetailPage';
import { WorkersPage } from '@/components/app/pages/WorkersPage';
import { WorkerDetailPage } from '@/components/app/pages/WorkerDetailPage';
import { WorkerNewPage } from '@/components/app/pages/WorkerNewPage';
import { ThreadsPage } from '@/components/app/pages/ThreadsPage';
import { ThreadDetailPage } from '@/components/app/pages/ThreadDetailPage';
import { AssetsPage } from '@/components/app/pages/AssetsPage';
import { FlowsPage } from '@/components/app/pages/FlowsPage';
import { FlowDetailPage } from '@/components/app/pages/FlowDetailPage';
import { FlowNewPage } from '@/components/app/pages/FlowNewPage';
import { OperationsPage } from '@/components/app/pages/OperationsPage';
import { SchedulerPage } from '@/components/app/pages/SchedulerPage';
import { TeamPage } from '@/components/app/pages/TeamPage';
import { SettingsPage } from '@/components/app/pages/SettingsPage';
import { AccountPage } from '@/components/app/pages/AccountPage';

interface AppRouteProps {
  view:
    | 'dashboard'
    | 'projects'
    | 'project-detail'
    | 'workers'
    | 'worker-detail'
    | 'worker-new'
    | 'threads'
    | 'thread-detail'
    | 'assets'
    | 'flows'
    | 'flow-detail'
    | 'flow-new'
    | 'operations'
    | 'scheduler'
    | 'team'
    | 'settings'
    | 'account';
  id?: string;
}

export const AppRoute = ({ view, id }: AppRouteProps) => {
  const renderView = () => {
    switch (view) {
      case 'dashboard':
        return <DashboardPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'project-detail':
        return <ProjectDetailPage projectId={id ?? ''} />;
      case 'workers':
        return <WorkersPage />;
      case 'worker-detail':
        return <WorkerDetailPage workerId={id ?? ''} />;
      case 'worker-new':
        return <WorkerNewPage />;
      case 'threads':
        return <ThreadsPage />;
      case 'thread-detail':
        return <ThreadDetailPage threadId={id ?? ''} />;
      case 'assets':
        return <AssetsPage />;
      case 'flows':
        return <FlowsPage />;
      case 'flow-detail':
        return <FlowDetailPage flowId={id ?? ''} />;
      case 'flow-new':
        return <FlowNewPage />;
      case 'operations':
        return <OperationsPage />;
      case 'scheduler':
        return <SchedulerPage />;
      case 'team':
        return <TeamPage />;
      case 'settings':
        return <SettingsPage />;
      case 'account':
        return <AccountPage />;
      default:
        return <DashboardPage />;
    }
  };

  return <WeaveworkerProvider>{renderView()}</WeaveworkerProvider>;
};
