import { defineField, defineType } from 'sanity'

export const corporatePageType = defineType({
  name: 'corporate',
  type: 'document',
  title: 'Corporate Services Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),

    // Resuable hero section code
    defineField({
        name: 'hero',
        type: 'hero',
        title: 'Hero Section'
    }),

    defineField({
        name: 'services',
        type: 'dropdown',
        title: 'Corporate Services Menu'
    })
    ]
})