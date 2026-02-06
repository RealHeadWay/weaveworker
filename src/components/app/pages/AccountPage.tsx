import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useWeaveworker } from '@/state/weaveworker-store';
import { buildAccountPortalUrl } from '@/services/entitlements';

export const AccountPage = () => {
  const { data, entitlements } = useWeaveworker();
  const portalUrl = buildAccountPortalUrl(data.account.id);

  return (
    <AppShell title="Account" subtitle="Manage plan, billing, and entitlements.">
      <Card className="bg-slate-900/60">
        <CardHeader>
          <CardTitle>Plan Details</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-slate-300 space-y-2">
          <p>Current tier: {entitlements.tier.toUpperCase()}</p>
          <p>Seats: {entitlements.seats}</p>
          <p>Projects limit: {entitlements.projectsLimit}</p>
          <p>Operations per day: {entitlements.operationsPerDay}</p>
          <a
            className="inline-flex items-center text-emerald-300"
            href={portalUrl}
            target="_blank"
            rel="noreferrer"
          >
            Open billing dashboard →
          </a>
        </CardContent>
      </Card>
    </AppShell>
  );
};
