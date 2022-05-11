import {
  Box,
  Text,
  Container,
  Image,
  Center
} from '@chakra-ui/react'
import { PrimaryButton } from '../Components/Atoms/Button/PrimaryButton'
import githubIcon from '../../assets/githubIcon.svg'

function Home () {
  return (
    <>
      <Box marginTop='50px'>
        <Container>
          <Text fontSize='4xl' align='center'>Sistema automático de inventario y cotizaciones (SAIC)</Text>
          <Text fontSize='2xl' align='center' mt={10}>Proyecto open source para ayudar a las empresas a gestionar su inventario y generar cotizaciones de forma automática</Text>
          <Center>
            <PrimaryButton
              mt={10}
              leftIcon={
                <Image src={githubIcon} alt='github' />
            }
              onClick={() => window.open('https://github.com/Jjaraa/saicapp')}
            >
              Ver el proyecto
            </PrimaryButton>
          </Center>
        </Container>
      </Box>
    </>
  )
}

export { Home }
