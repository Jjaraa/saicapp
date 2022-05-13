import {
  Spacer,
  Flex,
  ButtonGroup
} from '@chakra-ui/react'
import { MenuLink } from '../../Atoms/Menu/MenuLink'

function DashboardMenu () {
  return (
    <>
      <Flex backgroundColor='#fafafa' paddingBottom={2}>
        <></>
        <Spacer />
        <ButtonGroup gap={3} marginTop={3} marginRight={10}>
          <MenuLink to='/dashboard/resumen'>Resumen</MenuLink>
          <MenuLink to='/dashboard/inventario'>Inventario</MenuLink>
          <MenuLink to='/dashboard/clientes'>Clientes</MenuLink>
          <MenuLink to='/dashboard/cotizaciones'>Cotizaciones</MenuLink>
        </ButtonGroup>
      </Flex>
    </>
  )
}

export { DashboardMenu }
