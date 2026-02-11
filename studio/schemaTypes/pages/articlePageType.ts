import { defineField, defineType, defineArrayMember } from 'sanity'

export const articlePageType = defineType({
  name: 'article',
  type: 'document',
  title: 'Article Page',
  fieldsets: [
    {
      name: 'featureCard',
      title: 'Feature Card Options',
      description: 'Define how the article will appear on the home page as the featured article.',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Defines the link for the article, this will be how the article appears in the search bar.',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'featureCardTitle',
      type: 'string',
      title: 'Feature Card Title',
      fieldset: 'featureCard',
    }),

    defineField({
      name: 'featureCardBlurb',
      type: 'array',
      title: 'Feature Card Blurb',
      of: [defineArrayMember({ type: 'block' })],
      fieldset: 'featureCard',
    }),

    defineField({
      name: 'featureCardLinkLabel',
      type: 'string',
      title: 'Feature Card Link Label',
      fieldset: 'featureCard',
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
            defineArrayMember({
                name: 'textTitle',
                type: 'textTitleSection',
                title: 'Text and heading content type'
            }),
            defineArrayMember({
                type: 'image',
                options: { hotspot: true },
                fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text' })],
            }),
            defineArrayMember({
                type: 'block',
            })
            ],
        }),
    ],
  preview: {
    select: { title: 'title', subtitle: 'slug.current' },
    prepare({ title, subtitle }) {
      return { title, subtitle: subtitle ? `/articles/${subtitle}` : '(no slug)' }
    },
  },
})
