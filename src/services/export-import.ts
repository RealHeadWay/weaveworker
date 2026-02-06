import type { WeaveworkerData } from '@/domain/models';

export const exportToJson = (data: WeaveworkerData) => {
  return JSON.stringify(data, null, 2);
};

export const exportMemoryPack = (data: WeaveworkerData) => {
  return [
    '# Weaveworker Memory Pack',
    '',
    '## Workers',
    ...data.workers.map((worker) => `- ${worker.title}: ${worker.jobDescription}`),
    '',
    '## Assets',
    ...data.assets.map((asset) => `- ${asset.title}: ${asset.summary ?? asset.content}`),
    '',
  ].join('\n');
};

export const importFromJson = (payload: string): WeaveworkerData => {
  return JSON.parse(payload) as WeaveworkerData;
};
