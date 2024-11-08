import type { CollectionConfig } from 'payload'

export const Resources: CollectionConfig = {
  slug: 'resources',
  admin: { group: 'Data' },
  fields: [
    { name: 'id', type: 'text', required: true },
    { type: 'row', fields: [
      { name: 'type', type: 'select', options: ['data', 'content'], required: true, defaultValue: 'data' },
      { name: 'dataset', type: 'relationship', relationTo: 'datasets', required: true },
      // { name: 'project', type: 'relationship', relationTo: 'projects', required: true },
    ]},
    { name: 'code', type: 'code', admin: { language: 'markdown', condition: data => data.type === 'content' } },
    { name: 'data', type: 'json', required: true },
  ],
}