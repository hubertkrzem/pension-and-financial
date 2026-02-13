import { defineField, defineType } from 'sanity'

export const footerType = defineType({
    name: 'footer',
    type: 'document',
    title: 'Website Footer',
    description: 'This page defines the information stored in the footer of each page',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Footer Title',
        }),

        defineField({
            name: 'regulatoryDisclosures',
            type: 'array',
            title: 'Text field for Regulatory Disclosures',
            of: [
                {
                type: 'block',
                },
            ],
        }),
        
        defineField({
            name: 'privacyPolicy',
            title: 'Privacy Policy (PDF)',
            type: 'file',
            options: { accept: '.pdf' },
        }),

        defineField({
            name: 'termsOfService',
            title: 'Terms of Service (PDF)',
            type: 'file',
            options: { accept: '.pdf' },
        })
    ]
})