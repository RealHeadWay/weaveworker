import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const ProjectsPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Projects" subtitle="Departments and automation hubs.">
      <div className="grid gap-6 md:grid-cols-2">
        {data.projects.map((project) => (
          <Card key={project.id} className="bg-slate-900/60">
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-400 space-y-2">
              <p>Status: {project.status}</p>
              <p>Workers: {project.workerIds.length}</p>
              <p>Flows: {project.flowIds.length}</p>
              <a className="text-emerald-300" href={`/projects/${project.id}`}>
                Open project →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
};
