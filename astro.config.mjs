import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [robotsTxt()],
  vite: {
    plugins: [tailwindcss()],
  },
  site: 'https://macroxw.github.io',
  base: '/portfolio'
})
