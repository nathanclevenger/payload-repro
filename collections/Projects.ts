import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
  slug: 'projects',
  admin: { group: 'Admin', useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
  ],
}
