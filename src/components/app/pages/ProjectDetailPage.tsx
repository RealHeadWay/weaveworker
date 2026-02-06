import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

interface ProjectDetailPageProps {
  projectId: string;
}

export const ProjectDetailPage = ({ projectId }: ProjectDetailPageProps) => {
  const { data } = useWeaveworker();
  const project = data.projects.find((item) => item.id === projectId) ?? data.projects[0];

  if (!project) {
    return (
      <AppShell title="Project" subtitle="Project not found.">
        <p className="text-slate-400">Select a valid project.</p>
      </AppShell>
    );
  }

  return (
    <AppShell title={project.name} subtitle={project.description}>
      <div className="grid gap-6 lg:grid-cols-3">
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Tasks</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300">
            {project.taskIds.length} tasks linked
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Assets</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300">
            {project.assetIds.length} assets attached
          </CardContent>
        </Card>
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Automation Flows</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300">
            {project.flowIds.length} flows enabled
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
};
