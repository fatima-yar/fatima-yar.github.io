import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    icon(),
    compress(),
    (await import('astro-compress')).default(),
  ],
  site: 'https://fatima-yar.github.io',
})
