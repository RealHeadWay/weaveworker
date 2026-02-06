import React from 'react';
import { AppShell } from '@/components/app/AppShell';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FeatureGate } from '@/components/app/FeatureGate';

export const SchedulerPage = () => {
  return (
    <AppShell title="Scheduler" subtitle="Cron policies and always-on operations.">
      <FeatureGate
        feature="scheduler"
        fallback={<p className="text-sm text-slate-400">Upgrade to Pro to unlock 24/7 scheduling.</p>}
      >
        <Card className="bg-slate-900/60">
          <CardHeader>
            <CardTitle>Schedules</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-slate-300 space-y-2">
            <p>Weekly renewal follow-up • Mondays at 9:00 AM</p>
            <p>Campaign recap • Fridays at 4:00 PM</p>
          </CardContent>
        </Card>
      </FeatureGate>
    </AppShell>
  );
};
