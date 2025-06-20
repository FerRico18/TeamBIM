// MAIN. Control y renderización dinámica del root.

/* Se utiliza ReactDOM (React Document Object Model), el modelo 
estructurado del docuemnto que el navegador interpreta y muestra como página web.
Conexión con el navegador. */

import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'


// Config global dark 
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}
const theme = extendTheme({ config })

ReactDOM.createRoot(document.getElementById('root')).render(
  // Root hace el llamado al componente importado de App.jsx
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
