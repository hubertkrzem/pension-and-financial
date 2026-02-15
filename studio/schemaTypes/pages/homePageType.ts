import { defineField, defineType } from 'sanity'

import {HomeIcon} from '@sanity/icons'

export const homePageType = defineType({
  name: 'homePage',
  type: 'document',
  title: 'Home Page',
  icon: HomeIcon,
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
      type: 'object',
      title: 'Our Services Section',
      fields: [
        {
          name: 'heading',
          type: 'string',
          title: 'Services Heading',
        },
        defineField({
            name: 'box1',
            type: 'object',
            title: 'Box 1 Content',
            fields: [
                // {
                // name: 'SVGicon',
                // type: 'inlineSVG',
                //title: 'Box 1 Icon'
                // },
                {
                name: 'heading',
                type: 'string',
                title: 'Box 1 Heading',
                },
                {
                name: 'list',
                type: 'array',
                title: 'Box 1 List of Services',
                of: [
                    {
                        type: 'string',
                    },
                    ],
                },
                defineField({
                    name: 'link',
                    type: 'object',
                    title: 'Box 1 Link',
                    fields: [
                        {
                        name: 'linkLabel',
                        type: 'string',
                        title: 'Box 1 Link Label',
                        },
                        {
                        name: 'linkAddress',
                        type: 'string',
                        title: 'Box 1 Link Address',
                        },
                    ],
                }),
            ],
        }),
        defineField({
            name: 'box2',
            type: 'object',
            title: 'Box 2 Content',
            fields: [
                // {
                // name: 'SVGicon',
                // type: 'inlineSVG',
                //title: 'Box 1 Icon'
                // },
                {
                name: 'heading',
                type: 'string',
                title: 'Box 2 Heading',
                },
                {
                name: 'list',
                type: 'array',
                title: 'Box 2 List of Services',
                of: [
                    {
                        type: 'string',
                    },
                    ],
                },
                defineField({
                    name: 'link',
                    type: 'object',
                    title: 'Box 2 Link',
                    fields: [
                        {
                        name: 'linkLabel',
                        type: 'string',
                        title: 'Box 2 Link Label',
                        },
                        {
                        name: 'linkAddress',
                        type: 'string',
                        title: 'Box 2 Link Address',
                        },
                    ],
                }),
            ],
        }),
        ]
    }),
    defineField({
      name: 'articleSection',
      type: 'object',
      title: 'Featured Article Section',
      fields: [
        {
          name: 'header',
          type: 'string',
          title: 'Featured Article Heading',
        },
        defineField({
            name: 'featuredArticle',
            type: 'reference',
            title: 'Featured Article',
            to: [{ type: 'article' }],
            validation: (rule) => rule.required(),
        }),
        ]
    }),
  ],
})
