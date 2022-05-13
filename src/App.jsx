import { Navbar } from './Components/Molecules/Navbar'
import { Box } from '@chakra-ui/react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

function App () {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home')
    }
    if (location.pathname === '/dashboard') {
      navigate('/dashboard/resumen')
    }
  }, [])

  return (
    <Box
      h={screen.height}
      w='100%'
      backgroundColor='#f3eefe'
    >
      <div className='App'>
        <Navbar />
        <Outlet />
      </div>
    </Box>
  )
}

export default App
