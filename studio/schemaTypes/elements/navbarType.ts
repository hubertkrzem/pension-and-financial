import { defineField, defineType, defineArrayMember } from 'sanity'

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
      name: 'items',
      type: 'array',
      title: 'Links',
      readOnly: true,
      of: [
        defineArrayMember({
          type: 'object',
          name: 'navItem',
          title: 'Navigation Item',
          fields: [
            defineField({
              name: 'label',
              type: 'string',
              title: 'Label',
            }),
            defineField({
              name: 'link',
              type: 'array',
              validation: (rule) => rule.max(1).required(),
              of: [
                {
                  name: 'internalLink',
                  type: 'object',
                  title: 'Internal Link',
                  fields: [
                    { 
                      name: 'internalReference',
                      type: 'reference',
                      to: [
                        { type: 'page' },
                      ],
                    },
                  ],
                },
                {
                  name: 'externalLink',
                  type: 'object',
                  title: 'External Link',
                  fields: [
                    { name: 'url', type: 'url' },
                  ],
                },
              ],
            }),
            defineField({
              name: 'openInNewTab',
              type: 'boolean',
              initialValue: false,
            }),
          ],
        }),
      ],
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
                readOnly: true,
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