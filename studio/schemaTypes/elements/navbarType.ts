import { defineField, defineType } from 'sanity'

export const navbarType = defineType({
  name: 'navbar',
  title: 'Site Navigation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Navigation Title',
    }),
    defineField({
        name: 'button',
        type: 'object',
        title: 'CTA Button',
        fields: [
            {
                name: 'label',
                type: 'string',
                title: 'Button Label',
            },
            {
                name: 'link',
                type: 'string',
                title: 'Button Link Address',
            }
        ]
    })
  ],
})
