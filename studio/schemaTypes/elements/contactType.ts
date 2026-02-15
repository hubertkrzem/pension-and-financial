import {defineType, defineField} from 'sanity'

export const contactType = defineType({
  name: 'contact',
  title: 'Contact Section',
  type: 'document',
  fields: [
    // Optional heading as it appears on-page
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Get In Touch',
      validation: r => r.required()
    }),
    // Optional heading as it appears on-page
    defineField({
      name: 'subtitle',
      title: 'Section subtitle',
      type: 'string',
      initialValue: 'Ready to take control of your financial future? Contact us today.',
      validation: r => r.required()
    }),

    // Phone + hours shown under “Phone”
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: r => r.required()
    }),
    defineField({
      name: 'hours',
      title: 'Opening Hours',
      type: 'string', // keep exactly as displayed, e.g., "Mon–Fri 9AM–5PM"
      validation: r => r.required()
    }),

    // Email button links to DocuSign page
    defineField({
      name: 'emailLink',
      title: 'Email Link (Button)',
      type: 'object',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          initialValue: 'Get In Touch',
          validation: r => r.required()
        }),
        defineField({
          name: 'url',
          title: 'URL',
          type: 'url',
          validation: r => r.required()
        })
      ]
    }),

    // Office address block exactly as displayed
    defineField({
      name: 'officeAddress',
      title: 'Office Address (lines)',
      type: 'array',
      of: [{ type: 'string' }],
      validation: r => r.min(1)
    }),
    ]
})
