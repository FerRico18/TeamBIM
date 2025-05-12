import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9001',
    withCredentials: true, // útil si usas cookies o sesiones
});

export default api
