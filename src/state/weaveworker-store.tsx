import React, { createContext, useContext, useMemo, useState } from 'react';
import type { Entitlements, WeaveworkerData } from '@/domain/models';
import { createDemoDataset } from '@/state/seed';

export type SyncStatus = 'offline' | 'syncing' | 'online';

interface WeaveworkerContextValue {
  data: WeaveworkerData;
  syncStatus: SyncStatus;
  entitlements: Entitlements;
  setSyncStatus: (status: SyncStatus) => void;
}

const WeaveworkerContext = createContext<WeaveworkerContextValue | undefined>(undefined);

export const WeaveworkerProvider = ({ children }: { children: React.ReactNode }) => {
  const [data] = useState<WeaveworkerData>(() => createDemoDataset());
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('online');

  const value = useMemo<WeaveworkerContextValue>(
    () => ({
      data,
      syncStatus,
      entitlements: data.entitlements,
      setSyncStatus,
    }),
    [data, syncStatus]
  );

  return <WeaveworkerContext.Provider value={value}>{children}</WeaveworkerContext.Provider>;
};

export const useWeaveworker = () => {
  const context = useContext(WeaveworkerContext);
  if (!context) {
    throw new Error('useWeaveworker must be used within WeaveworkerProvider');
  }
  return context;
};
