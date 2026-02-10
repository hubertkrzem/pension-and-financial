import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '38eus8fk',
    dataset: 'production'
  },
  deployment: {
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/cli#auto-updates
     */
    autoUpdates: true,
  },
  vite: (prev) => ({
    ...prev,
    resolve: {
      ...prev.resolve,
      dedupe: ['react', 'react-dom', 'react/jsx-runtime', 'styled-components'],
    },
  }),
})
