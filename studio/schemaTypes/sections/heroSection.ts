import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'heroSection',          // <— must match what your 'page' schema references
  title: 'Hero Section',
  type: 'object',               // sections inside a page are usually objects, not documents
  fields: [
    defineField({
      name: 'heading',
      type: 'string',
      title: 'Heading',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'subheading',
      type: 'text',
      title: 'Subheading'
    }),
    defineField({
      name: 'backgroundImage',
      type: 'image',
      title: 'Background Image',
      options: {hotspot: true}
    }),
    // add whatever else you need...
  ]
})