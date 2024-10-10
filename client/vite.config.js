import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import svgr from 'vite-plugin-svgr' // Import SVGR plugin

export default defineConfig({
  plugins: [
    react(),
    svgr() // Add SVGR plugin
  ],
  css: {
    postcss: {
      plugins: [
        tailwindcss,
        autoprefixer,
      ],
    },
  },
})
