import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://myprotfolio-2bq6.onrender.com/', // Your backend server
        changeOrigin: true,
      },
    },
  },
  
})



