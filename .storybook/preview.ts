import type { Preview } from '@storybook/vue3'
import { setup } from '@storybook/vue3'
import vuetify from '../src/plugins/vuetify'

import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

setup((app) => {
  app.use(vuetify)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
}

export default preview
