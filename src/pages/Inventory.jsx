import {
  Box,
  Flex,
  Spacer
} from '@chakra-ui/react'
import { Title } from '../Components/Atoms/Text/Title'
import { PrimaryButton } from '../Components/Atoms/Button/PrimaryButton'
import { ProductsList } from '../Components/Organisms/InventoryOrganisms/ProductsList'

function Inventory () {
  return (
    <Box padding={20}>
      <Flex>
        <Title>Inventario</Title>
        <Spacer />
        <PrimaryButton>Agregar Producto</PrimaryButton>
      </Flex>
      <Box mt={10}>
        <ProductsList />
      </Box>
    </Box>
  )
}

export { Inventory }
