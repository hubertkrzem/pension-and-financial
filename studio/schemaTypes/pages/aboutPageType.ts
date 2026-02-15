import { defineField, defineType } from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  type: 'document',
  title: 'About Page',
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
        name: 'mission',
        type: 'object',
        title: 'Our Mission',
        fields: [
            {
                name: 'heading',
                type: 'string',
                title: 'Heading',
            },
            {
                name: 'subheading',
                type: 'string',
                title: 'Subheading',
            },

            // Quotes
            defineField({
                name: 'quotes',
                type: 'array',
                title: 'Quotes',
                of: [
                    {
                        name: 'quote',
                        type: 'string',
                        title: 'Quote',
                    },
                ],
                validation: (Rule) => Rule.max(2).error('You can add a maximum of 2 quotes.'),
            }),
            {
                name: 'author',
                type: 'string',
                title: 'Quote Author',
            },

            defineField({
                name: 'body',
                type: 'array',
                title: 'Body Content',
                of: [
                    {
                    type: 'block',
                    },
                ],
            }),
        ]
    }),
    defineField({
        name: 'ourTeam',
        type: 'array',
        title: 'Our Team',
        of: [
            defineField({
                name: 'employeeCard',
                type: 'employeeCard',
                title: 'Employee Card',
            }), 
        ],
    }),

    defineField({
        name: 'whyUs1',
        type: 'textTitleSection',
        title: 'Why Choose Us?',
    }),
    ]
})