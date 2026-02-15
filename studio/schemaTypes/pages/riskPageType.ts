import { defineField, defineType } from 'sanity'
import { FixedArrayInput, FixedItemInput } from '../../components/FixedListInput'

export const riskPageType = defineType({
  name: 'riskPage',
  type: 'document',
  title: 'Risk Page',
  initialValue: {
    riskLevels: [
      { _type: 'riskLevel', name: 'Very Low Risk', description: 'Minimal fluctuations. Capital protection is key.', profile: 'Cautious investors seeking stability.' },
      { _type: 'riskLevel', name: 'Low Risk', description: 'Slight value changes. Focus on steady returns.', profile: 'Conservative investors with low tolerance for loss.' },
      { _type: 'riskLevel', name: 'Low to Moderate Risk', description: 'Some volatility. Balanced approach.', profile: 'Investors open to modest growth with limited risk.' },
      { _type: 'riskLevel', name: 'Moderate Risk', description: 'Noticeable ups and downs. Potential for growth.', profile: 'Balanced investors seeking growth with some risk.' },
      { _type: 'riskLevel', name: 'Moderate to High Risk', description: 'Higher volatility. Greater return potential.', profile: 'Growth-focused investors comfortable with risk.' },
      { _type: 'riskLevel', name: 'High Risk', description: 'Significant fluctuations. High return potential.', profile: 'Experienced investors with strong risk tolerance.' },
      { _type: 'riskLevel', name: 'Very High Risk', description: 'Very volatile. Returns can vary widely.', profile: 'Speculative investors aiming for maximum growth.' },
    ],
  },
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
    }),
    // Resuable hero section code
    defineField({
        name: 'hero',
        type: 'hero',
        title: 'Hero Section'
    }),

    defineField({
        name: 'riskAppetite',
        type: 'textTitleSection',
        title: 'What is your risk appetite?'
    }),

    defineField({
        name: 'riskLevels',
        type: 'array',
        title: 'Risk Scale Levels',
        validation: (Rule) => Rule.min(7).max(7),
        components: { input: FixedArrayInput },
        of: [{
            type: 'object',
            name: 'riskLevel',
            title: 'Risk Level',
            fields: [
                { name: 'name', type: 'string', title: 'Name' },
                { name: 'description', type: 'string', title: 'Description' },
                { name: 'profile', type: 'string', title: 'Investor Profile' },
            ],
            components: { item: FixedItemInput },
            preview: {
                select: { name: 'name' },
                prepare({ name }) {
                    return { title: name || 'Untitled Level' }
                },
            },
        }],
    }),

    defineField({
        name: 'body',
        type: 'array',
        title: 'Risk Scale Warnings',
        of: [
            {
            type: 'block',
            },
        ],
    }),
    ]
})