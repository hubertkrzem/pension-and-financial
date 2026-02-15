import { defineField, defineType } from 'sanity'

export const dropDownType = defineType({
    name: 'dropdown',
    type: 'object',
    title: 'Dropdown Menu',
    fields: [
        {
            name: 'heading',
            type: 'string',
            title: 'Section heading',
        },

        defineField({
            name: 'items',
            type: 'array',
            title: 'Dropdown Menu Items',
            of: [
                defineField({
                    name: 'content',
                    type: 'object',
                    title: 'Dropdown Menu Contents',
                    fields: [
                        {
                        name: 'heading',
                        type: 'string',
                        title: 'Content Title'
                        },
                        defineField({
                        name: 'body',
                        type: 'array',
                        title: 'Content Body',
                        of: [
                            {
                            type: 'block',
                            },
                        ],
                        })
                    ]
                }),
            ],
        }),
    ]
})