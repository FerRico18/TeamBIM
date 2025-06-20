// Diseño detallado del sistema

/*
  Se utiliza Chakra UI (no CSS). 
  Componentes de diseño de React.
*/

import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './components/Login';
import Register from './components/Register';
import PersonalDashboard from './components/personalDashboard.jsx';
import Projects from './components/Projects.jsx';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PersonalDashboard />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  )
}
