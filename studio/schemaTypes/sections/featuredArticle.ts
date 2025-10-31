import {defineType, defineField} from 'sanity'

export const featuredArticle = defineType({
  name: 'featuredArticle',
  title: 'Featured Article',
  type: 'object',
  fields: [
        defineField({
            name: 'articleTitle',
            type: 'string',
            title: 'Article Title'
        }),
        defineField({
            name: 'articleSubtitle',
            type: 'text',
            title: 'Article Subtitle'
        }),
        defineField({
            name: 'articleLinkLabel',
            type: 'string',
            title: 'Article Link Label'
        }),
        defineField({
            name: 'articleLink',
            type: 'url',
            title: 'Article Link',
            validation: r => r.uri({ scheme: ['http', 'https'] })
        }),
    ],
})