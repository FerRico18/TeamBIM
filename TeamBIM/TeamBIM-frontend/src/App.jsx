// Diseño detallado del sistema

/*
  Se utiliza Chakra UI (no CSS). 
  Componentes de diseño de React.
*/

import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/personalDashboard';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}
