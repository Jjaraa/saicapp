import { useState, useEffect } from 'react'
import { Box, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
import { signInWithGoogle, signout, getSession } from '../../utils/Auth'

function Navbar () {
  const [session, setSession] = useState('')

  useEffect(() => {
    getSession().then(result => setSession(result))
  }, [])

  return (
    <>
      <header>
        <Box
          d='flex'
          alignItems='center'
          justifyContent='space-between'
          ml={6}
          mr={6}
        >
          <Box>
            <Link to='/'>
              <Image boxSize='90px' src={Logo} alt='brand' />
            </Link>
          </Box>
          <Box>
            {
              session !== ''
                ? (
                  <Button
                    mr={2}
                    fontSize='sm'
                    onClick={() => signInWithGoogle()}
                  >
                    Iniciar sesión
                  </Button>
                  )
                : (
                  <Button
                    mr={2}
                    fontSize='sm'
                    onClick={() => {
                      signout()
                      setSession('')
                    }}
                  >
                    Cerrar Sesión
                  </Button>
                  )
            }
            <Button
              fontSize='sm'
              onClick={() => console.log(getSession())}
            >
              Registrarse
            </Button>
          </Box>
        </Box>
      </header>
    </>
  )
}

export { Navbar }
