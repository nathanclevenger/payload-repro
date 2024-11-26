import { TaskConfig, WorkflowConfig } from 'payload'

export const importData: WorkflowConfig<'importData'> = {
  slug: 'importData',
  retries: 3,
  // inputSchema: [],
  // outputSchema: [{ name: 'success', type: 'checkbox', required: true }],
  handler: async ({ job, tasks, req, inlineTask }) => {



  },
}
