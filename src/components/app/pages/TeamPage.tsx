import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureGate } from '@/components/app/FeatureGate';
import { useWeaveworker } from '@/state/weaveworker-store';

export const TeamPage = () => {
  const { data } = useWeaveworker();

  return (
    <AppShell title="Team" subtitle="Members, roles, and invites.">
      <FeatureGate
        feature="teams"
        fallback={<p className="text-sm text-slate-400">Teams are available on Pro plans.</p>}
      >
        <div className="grid gap-6 md:grid-cols-2">
          {data.teams.map((team) => (
            <Card key={team.id} className="bg-slate-900/60">
              <CardHeader>
                <CardTitle>{team.name}</CardTitle>
                <CardDescription>{team.members.length} members</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-slate-300 space-y-2">
                {team.members.map((member) => (
                  <div key={member.profileId} className="flex justify-between">
                    <span>{member.profileId}</span>
                    <span className="text-xs uppercase text-slate-500">{member.role}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </FeatureGate>
    </AppShell>
  );
};
