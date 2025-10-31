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