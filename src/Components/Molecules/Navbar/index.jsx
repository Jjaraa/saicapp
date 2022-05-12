import { useState, useEffect } from 'react'
import {
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box,
  Image,
  Text
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logo from '../../../../assets/logo.svg'
import { signInWithGoogle, signout, getSession } from '../../../services/Auth'
import { PrimaryButton } from '../../Atoms/Button/PrimaryButton'

function Navbar () {
  const { isOpen, onOpen, onClose } = useDisclosure()
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
            <Link to='/home'>
              <Image boxSize='90px' src={Logo} alt='brand' />
            </Link>
          </Box>
          <Box>
            {
              session !== ''
                ? (
                  <PrimaryButton
                    mr={2}
                    fontSize='sm'
                    onClick={() => signInWithGoogle()}
                  >
                    Iniciar sesión
                  </PrimaryButton>
                  )
                : (
                  <PrimaryButton
                    mr={2}
                    fontSize='sm'
                    onClick={() => {
                      signout()
                      setSession('')
                    }}
                  >
                    Cerrar Sesión
                  </PrimaryButton>
                  )
            }
            <PrimaryButton
              fontSize='sm'
              onClick={onOpen}
            >
              Registrarse
            </PrimaryButton>
          </Box>
        </Box>
      </header>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Beta cerrada</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize='lg' align='center'>Por el momento SAIC se encuentra en beta cerrada :(</Text>
            <Text marginTop='15px'>Se abrirá el proceso de creación de cuentas pronto!</Text>
          </ModalBody>

          <ModalFooter>
            <PrimaryButton mr={3} onClick={onClose}>
              Cerrar
            </PrimaryButton>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export { Navbar }
