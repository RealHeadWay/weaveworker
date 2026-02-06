import React from 'react';
import { useWeaveworker } from '@/state/weaveworker-store';

interface FeatureGateProps {
  feature: string;
  fallback?: React.ReactNode;
  children: React.ReactNode;
}

export const FeatureGate = ({ feature, fallback, children }: FeatureGateProps) => {
  const { entitlements } = useWeaveworker();
  const hasFeature = entitlements.features.includes(feature) || entitlements.tier === 'pro';

  if (!hasFeature) {
    return <>{fallback ?? null}</>;
  }

  return <>{children}</>;
};
