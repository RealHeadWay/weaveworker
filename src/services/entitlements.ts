import type { Entitlements } from '@/domain/models';

export const fetchEntitlements = async (): Promise<Entitlements> => {
  return {
    id: 'entitlements-001',
    tier: 'free',
    seats: 1,
    projectsLimit: 3,
    workersLimit: 3,
    operationsPerDay: 25,
    retentionDays: 30,
    features: ['local-first'],
  };
};

export const buildAccountPortalUrl = (accountId: string) =>
  `https://billing.weaveworker.ai/portal?account=${accountId}`;
