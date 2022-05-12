import {
  Spacer,
  Flex,
  ButtonGroup
} from '@chakra-ui/react'
import { MenuLink } from '../../../Atoms/Menu/MenuLink'

function DashMenu () {
  return (
    <>
      <Flex borderBlockEnd='1px'>
        <></>
        <Spacer />
        <ButtonGroup gap={3} marginTop={3} marginRight={10}>
          <MenuLink to='/'>Resumen</MenuLink>
          <MenuLink to='/'>Inventario</MenuLink>
          <MenuLink to='/'>Clientes</MenuLink>
          <MenuLink to='/'>Cotizaciones</MenuLink>
        </ButtonGroup>
      </Flex>
    </>
  )
}

export { DashMenu }
