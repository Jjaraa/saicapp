import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { Dashboard } from './pages/Dashboard'
import { Home } from './pages/Home'
import { Resume } from './pages/Resume'
import { Inventory } from './pages/Inventory'
import { Clients } from './pages/Clients'
import { Quote } from './pages/Quote'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route
        path='/'
        element={
          <React.StrictMode>
            <ChakraProvider>
              <App />
            </ChakraProvider>
          </React.StrictMode>
        }
      >
        <Route path='home' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route path='resumen' element={<Resume />} />
          <Route path='inventario' element={<Inventory />} />
          <Route path='clientes' element={<Clients />} />
          <Route path='cotizaciones' element={<Quote />} />
        </Route>
        <Route
          path='*'
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
)
