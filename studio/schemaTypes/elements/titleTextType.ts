import { defineField, defineType } from 'sanity'

export const textTitleType = defineType({
    name: 'textTitleSection',
    type: 'object',
    title: 'Text Box',
    description: 'Standard text box section, includes a field for a section heading and a text box',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Heading',
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
})