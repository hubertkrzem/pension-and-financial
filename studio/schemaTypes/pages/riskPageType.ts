import { defineField, defineType } from 'sanity'

export const riskPageType = defineType({
  name: 'riskPage',
  type: 'document',
  title: 'Risk Page',
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
        name: 'riskAppetite',
        type: 'textTitleSection',
        title: 'What is your risk appetite?'
    }),

    // Might delete and leave hard coded
    defineField({
        name: 'body',
        type: 'array',
        title: 'Risk Scale Warnings',
        of: [
            {
            type: 'block',
            },
        ],
    }),
    ]
})