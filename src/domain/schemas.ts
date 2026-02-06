import type { WeaveworkerData } from './models';

export const schemaVersion = 1;

export const schemaNotes = {
  description:
    'Initial Jazz schema for Weaveworker. In production, each entity is a CoValue with references held on AccountRoot.',
};

export const migrations: Array<{
  version: number;
  description: string;
  migrate: (data: WeaveworkerData) => WeaveworkerData;
}> = [
  {
    version: 1,
    description: 'Bootstrap core entities for local-first MVP.',
    migrate: (data) => data,
  },
];
