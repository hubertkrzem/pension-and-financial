import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import type {StructureBuilder} from 'sanity/structure'
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

const singletonLabels: Record<string, string> = {
  homePage: 'Home Page',
  aboutPage: 'About Page',
  faqPage: 'FAQ Page',
  riskPage: 'Risk Page',
  personalPage: 'Personal Page',
  corporate: 'Corporate Page',
  legal: 'Legal Page',
  navbar: 'Navbar',
  contact: 'Contact',
  footer: 'Footer',
}

function singletonItem(S: StructureBuilder, typeName: string) {
  return S.listItem()
    .title(singletonLabels[typeName] ?? typeName)
    .id(typeName)
    .child(
      S.document()
        .schemaType(typeName)
        .documentId(typeName)
    )
}

export default defineConfig({
  name: 'default',
  title: 'pension-financial',

  projectId: '38eus8fk',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items(
                    ['homePage', 'aboutPage', 'faqPage', 'riskPage', 'personalPage', 'corporate', 'legal'].map(
                      (type) => singletonItem(S, type)
                    )
                  )
              ),

            S.listItem()
              .title('Site Elements')
              .child(
                S.list()
                  .title('Site Elements')
                  .items(
                    ['navbar', 'contact', 'footer'].map(
                      (type) => singletonItem(S, type)
                    )
                  )
              ),

            S.divider(),

            ...S.documentTypeListItems().filter(
              (item) => !singletonTypes.includes(item.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],

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
