import { defineField, defineType } from 'sanity'

export const heroSectionType = defineType({
    name: 'hero',
    type: 'object',
    title: 'Hero Section',
    fields: [
    {
        name: 'heading',
        type: 'string',
        title: 'Hero Heading',
    },
    {
        name: 'headingLine2',
        type: 'string',
        title: 'Hero Heading Line 2',
        description: 'Optional second line of the heading. Renders on a new line below the main heading.',
    },
    {
        name: 'image',
        type: 'image',
        title: 'Hero Image',
        options: {
        hotspot: true,
        },
        fields: [
        {
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
        },
        ],
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
    ],
})