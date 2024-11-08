import type { CollectionConfig } from 'payload'

export const Datasets: CollectionConfig = {
  slug: 'datasets',
  admin: { group: 'Data', useAsTitle: 'name' },
  fields: [
    { type: 'row', fields: [
      { name: 'name', type: 'text', required: true },
      // { name: 'project', type: 'relationship', relationTo: 'projects', required: true },
    ]},
    { name: 'resources', type: 'join', collection: 'resources', on: 'dataset' },
  ],
}