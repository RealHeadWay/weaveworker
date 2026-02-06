export interface N8nConnection {
  baseUrl: string;
  apiKey: string;
}

export const validateConnection = async ({ baseUrl }: N8nConnection) => {
  return {
    ok: true,
    message: `Connected to ${baseUrl}`,
  };
};

export const runWorkflow = async (connection: N8nConnection, workflowId: string) => {
  return {
    runId: `run-${workflowId}`,
    status: 'queued',
    connection,
  };
};
