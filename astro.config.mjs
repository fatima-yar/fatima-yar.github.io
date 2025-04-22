import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import icon from 'astro-icon'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  experimental: {
    transitions: true,
  },
  integrations: [
    tailwind(),
    icon(),
    compress(),
    (await import('astro-compress')).default(),
  ],
  site: 'https://fatima-yar.github.io',
})
