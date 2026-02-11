import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = [
  'homePage',
  'aboutPage',
  'faqPage',
  'riskPage',
  'personalPage',
  'corporate',
  'legal',
  'navbar',
  'contact',
  'footer',
]

export default defineConfig({
  name: 'default',
  title: 'pension-financial',

  projectId: '38eus8fk',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },

  document: {
    actions: (prev, context) => {
      if (singletonTypes.includes(context.schemaType)) {
        return prev.filter((action) => action.action !== 'delete' && action.action !== 'duplicate')
      }
      return prev
    },
    newDocumentOptions: (prev) => {
      return prev.filter((option) => !singletonTypes.includes(option.templateId))
    },
  },
})
