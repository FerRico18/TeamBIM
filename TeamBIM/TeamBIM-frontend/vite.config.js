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
    host: true, // necesario para que Docker lo exponga
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://team_bim_backend:9001', // nombre del contenedor backend + puerto expuesto
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})
