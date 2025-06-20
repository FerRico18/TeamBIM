/* 
  Vite es una build tool.
  Utiliza ESBuild para el arranque y Rollup para el build final.
  Reload Instantáneo.
  Vite > Create Ract App
*/
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/styles'),
    }
  },
  server: {
    proxy: {
      '/api/register': {
        target: 'http://team_bim_backend:9000',
        changeOrigin: true,
        secure: false,
      },
      '/api/login': {
        target: 'http://team_bim_backend:9000',
        changeOrigin: true,
        secure: false,
      },
    }
  }
})
