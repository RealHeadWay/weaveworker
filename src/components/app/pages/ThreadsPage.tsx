import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const ThreadsPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Threads" subtitle="Worker-centric chat history and memory.">
      <div className="grid gap-6 md:grid-cols-2">
        {data.threads.map((thread) => (
          <Card key={thread.id} className="bg-slate-900/60">
            <CardHeader>
              <CardTitle>Thread {thread.id}</CardTitle>
              <CardDescription>Worker: {thread.workerId}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <p>Messages: {thread.messages.length}</p>
              <a className="text-emerald-300" href={`/threads/${thread.id}`}>
                Open thread →
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
};
