import axios from 'axios'

const api = axios.create({
    baseURL: '/api',
    withCredentials: true, // útil si usas cookies o sesiones
});

export default api
