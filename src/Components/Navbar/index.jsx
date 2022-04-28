import { Box, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/logo.svg'
import { supabase } from '../../utils/SupabaseClient'

async function signInWithGoogle () {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google'
  })
  console.log(user, session, error)
}

function Navbar () {
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
            <Button
              mr={2}
              fontSize='sm'
              onClick={() => signInWithGoogle()}
            >
              Iniciar sesión
            </Button>
            <Button fontSize='sm'>
              Registrarse
            </Button>
          </Box>
        </Box>
      </header>
    </>
  )
}

export { Navbar }
