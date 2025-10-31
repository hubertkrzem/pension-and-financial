import { defineField, defineType } from 'sanity'

export const articlePageType = defineType({
  name: 'article',
  type: 'document',
  title: 'Article Page',
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
        name: 'content',
        type: 'array',
        title: 'Article Content',
        of: [ 
            // Three types of content, Text + Heading, Image, Text
            {
                name: 'textTitle',
                type: 'textTitleSection',
                title: 'Text and heading content type'
            },
            {
                type: 'image',
                options: { hotspot: true },
                fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
            },
            { type: 'block' }
            ],
        }),
    ],
})
