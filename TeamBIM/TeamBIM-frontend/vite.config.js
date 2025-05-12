/* 
  Vite es una build tool.
  Utiliza ESBuild para el arranque y Rollup para el build final.
  Reload Instantáneo.
  Vite > Create Ract App
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/register': {
        target: 'http://localhost:9001',
        changeOrigin: true,
        secure: false,
      },
      '/login': {
        target: 'http://localhost:9001',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
