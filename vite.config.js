import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: 'https://webflow.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/(.*)/, '/$1'),
      }
    }
  }
})
