import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: '/pierceinprint-website/' // Uncomment this if deploying to GitHub Pages at a subpath
  base: './',
})
