import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Configure base path for GitHub Pages
  base: '/photographer-portfolio/',
  plugins: [react()],
})
