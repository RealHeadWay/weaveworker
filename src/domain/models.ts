export type Tier = 'free' | 'pro';
export type Role = 'owner' | 'admin' | 'member' | 'viewer';

export interface Profile {
  id: string;
  name: string;
  email: string;
  avatarUrl?: string;
}

export interface AccountRoot {
  id: string;
  profile: Profile;
  teamIds: string[];
  localSettings: {
    theme: 'dark' | 'light';
    offlineMode: boolean;
    featureFlags: string[];
  };
  vaultRefs: {
    n8nApiKeyRef?: string;
    aiKeyRefs: string[];
  };
  entitlementsId: string;
}

export interface Team {
  id: string;
  name: string;
  members: Array<{ profileId: string; role: Role }>;
  policy: {
    approvalsRequired: boolean;
    runLimitsPerDay: number;
    allowedIntegrations: string[];
  };
  projectIds: string[];
  workerIds: string[];
  assetIds: string[];
  flowIds: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'archived';
  memberRoles: Array<{ profileId: string; role: Role }>;
  workerIds: string[];
  assetIds: string[];
  taskIds: string[];
  flowIds: string[];
  operationIds: string[];
}

export interface Worker {
  id: string;
  title: string;
  jobDescription: string;
  persona: string;
  sops: string[];
  toolPolicy: string;
  assignedProjectIds: string[];
  memory: {
    retentionDays: number;
    rememberAssets: boolean;
    rememberThreads: boolean;
  };
  threadIds: string[];
  knowledgeAssetIds: string[];
}

export type AssetType = 'note' | 'doc' | 'link' | 'file' | 'transcript' | 'dataset' | 'snippet';

export interface Asset {
  id: string;
  type: AssetType;
  title: string;
  content: string;
  tags: string[];
  source: string;
  createdBy: string;
  permissions: Role[];
  embeddingStatus: 'pending' | 'ready' | 'skipped';
  summary?: string;
}

export interface ThreadMessage {
  id: string;
  role: 'system' | 'user' | 'assistant' | 'tool';
  content: string;
  timestamp: string;
  attachments?: string[];
  toolCalls?: string[];
}

export interface Thread {
  id: string;
  workerId: string;
  projectId?: string;
  messages: ThreadMessage[];
  artifacts: {
    summaries: string[];
    decisions: string[];
    actionItems: string[];
  };
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'backlog' | 'assigned' | 'in_progress' | 'needs_review' | 'done';
  assigneeId?: string;
  dueDate?: string;
  priority: 'low' | 'medium' | 'high';
  linkedAssetIds: string[];
  linkedThreadIds: string[];
  linkedOperationIds: string[];
}

export interface Flow {
  id: string;
  name: string;
  description: string;
  n8nWorkflowJson: string;
  triggers: string[];
  inputsSchema: string;
  requiresApproval: boolean;
  version: number;
}

export interface Operation {
  id: string;
  flowId: string;
  triggeredBy: string;
  status: 'queued' | 'running' | 'succeeded' | 'failed' | 'cancelled';
  startedAt: string;
  finishedAt?: string;
  logs: string[];
  outputs: string[];
  artifacts: string[];
  costUsd?: number;
}

export interface Integration {
  id: string;
  type: 'n8n' | 'provider' | 'connector';
  name: string;
  baseUrl?: string;
  authMethod: 'api_key' | 'oauth' | 'none';
  instanceId?: string;
  secretRef?: string;
}

export interface AuditEvent {
  id: string;
  timestamp: string;
  actorId: string;
  action: string;
  targetType: string;
  targetId: string;
  metadata?: Record<string, string>;
}

export interface Entitlements {
  id: string;
  tier: Tier;
  seats: number;
  projectsLimit: number;
  workersLimit: number;
  operationsPerDay: number;
  retentionDays: number;
  features: string[];
}

export interface WeaveworkerData {
  account: AccountRoot;
  teams: Team[];
  projects: Project[];
  workers: Worker[];
  assets: Asset[];
  threads: Thread[];
  tasks: Task[];
  flows: Flow[];
  operations: Operation[];
  integrations: Integration[];
  auditEvents: AuditEvent[];
  entitlements: Entitlements;
}
