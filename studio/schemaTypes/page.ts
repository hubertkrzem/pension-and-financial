import {defineType, defineField} from 'sanity'

export const page = defineType({
  name: 'page',
  title: 'Pages',
  type: 'document',
  fields: [
    defineField({name: 'title', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', type: 'slug', options: {source: 'title'}, validation: (Rule) => Rule.required()}),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        {type: 'heroSection'},
      ],
    }),
  ],
})