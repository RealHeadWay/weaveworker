import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';

export const AssetsPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Assets" subtitle="Knowledge base and memory artifacts.">
      <div className="grid gap-6 md:grid-cols-2">
        {data.assets.map((asset) => (
          <Card key={asset.id} className="bg-slate-900/60">
            <CardHeader>
              <CardTitle>{asset.title}</CardTitle>
              <CardDescription>{asset.type.toUpperCase()}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-slate-300 space-y-2">
              <p className="line-clamp-2">{asset.summary ?? asset.content}</p>
              <p className="text-xs text-slate-500">Tags: {asset.tags.join(', ')}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </AppShell>
  );
};
