import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import compress from 'astro-compress'

export default defineConfig({
  integrations: [tailwind(), icon(), compress()],
  site: 'https://fatima-yar.github.io',
})
