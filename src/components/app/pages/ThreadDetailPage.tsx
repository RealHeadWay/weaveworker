import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

interface ThreadDetailPageProps {
  threadId: string;
}

export const ThreadDetailPage = ({ threadId }: ThreadDetailPageProps) => {
  const { data } = useWeaveworker();
  const thread = data.threads.find((item) => item.id === threadId) ?? data.threads[0];

  if (!thread) {
    return (
      <AppShell title="Thread" subtitle="Thread not found.">
        <p className="text-slate-400">Select a valid thread.</p>
      </AppShell>
    );
  }

  return (
    <AppShell title={`Thread ${thread.id}`} subtitle={`Worker ${thread.workerId}`}>
      <Card className="bg-slate-900/60">
        <CardHeader>
          <CardTitle>Messages</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm text-slate-300">
          {thread.messages.map((message) => (
            <div key={message.id} className="rounded-lg border border-slate-800 p-3">
              <p className="text-xs uppercase text-slate-500">{message.role}</p>
              <p>{message.content}</p>
              <p className="text-xs text-slate-500">{message.timestamp}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  );
};
