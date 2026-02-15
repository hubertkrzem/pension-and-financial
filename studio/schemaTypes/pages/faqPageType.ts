import { defineField, defineType } from 'sanity'

export const faqPageType = defineType({
  name: 'faqPage',
  type: 'document',
  title: 'FAQ Page',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),

    defineField({
        name: 'hero',
        type: 'hero',
        title: 'Hero Section'
    }),

    defineField({
        name: 'faqs',
        type: 'array',
        title: 'List of Dropdown Menus',
        description: 'Section for adding new FAQ categories, page contents will update accordingly',
        of: [
            {
                name: 'faqs',
                type: 'dropdown',
                title: 'List of Dropdown Sections'
            }
        ]
    }),

    {
        name: 'moreInfo',
        type: 'textTitleSection',
        title: 'Need more Information section' 
    }
  ]
})