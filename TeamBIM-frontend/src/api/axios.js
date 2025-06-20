import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9001', // sin /api porque tú ya lo incluyes en las rutas
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    withCredentials: false, // útil si usas cookies o sesiones
});

export default api;
