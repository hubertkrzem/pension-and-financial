import { defineField, defineType } from 'sanity'

export const personalPageType = defineType({
  name: 'personalPage',
  type: 'document',
  title: 'Personal Services Page',
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
        title: 'Personal Services Menu'
    })
    ]
})