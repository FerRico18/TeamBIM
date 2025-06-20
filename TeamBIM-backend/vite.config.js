import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        proxy: {
            '/register': 'http://localhost:9001',
            '/login': 'http://localhost:9001',
            '/api': 'http://localhost:9001',
        },
    },
});
