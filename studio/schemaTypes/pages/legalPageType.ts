import { defineField, defineType } from 'sanity'

export const legalPageType = defineType({
  name: 'legal',
  type: 'document',
  title: 'Legal Disclosures Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Page Heading',
    }),
    defineField({
        name: 'content',
        type: 'array',
        title: 'Legal Disclosures Content',
        of: [{ type: 'block' }],
        }),
    ],
})