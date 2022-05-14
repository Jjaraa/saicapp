import {
  Box,
  Flex,
  Spacer,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { Title } from '../Components/Atoms/Text/Title'
import { PrimaryButton } from '../Components/Atoms/Button/PrimaryButton'
import { ProductsList } from '../Components/Organisms/InventoryOrganisms/ProductsList'
import { AddProductModal } from '../Components/Organisms/InventoryOrganisms/AddProductModal'

const feedProducts = [
  {
    id: 1,
    name: 'Producto 1aasksksksksksksksksksksksk',
    observation: 'Observación 1',
    fraction: 10,
    pricePackage: 10000,
    priceUnit: 1000
  },
  {
    id: 2,
    name: 'Producto 2',
    observation: 'Observación 2',
    fraction: 20,
    pricePackage: 20000,
    priceUnit: 2000
  },
  {
    id: 3,
    name: 'Producto 3',
    observation: 'Observación 3',
    fraction: 30,
    pricePackage: 30000,
    priceUnit: 3000
  }
]

function Inventory () {
  const [products, setProducts] = useState(feedProducts)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const updateProduct = (product) => {
    setProducts(products.map(p => p.id === product.id ? product : p))
  }

  const deleteProduct = (product) => {
    setProducts(products.filter(p => p.id !== product.id))
  }

  const addProduct = (product) => {
    setProducts([...products, product])
  }

  return (
    <>
      <Box padding={20}>
        <Flex>
          <Title>Inventario</Title>
          <Spacer />
          <PrimaryButton onClick={onOpen}>Agregar Producto</PrimaryButton>
        </Flex>
        <Box mt={10}>
          <ProductsList
            products={products}
            updateProduct={updateProduct}
            deleteProduct={deleteProduct}
          />
        </Box>
      </Box>
      <AddProductModal isOpen={isOpen} onClose={onClose} addProduct={addProduct} />
    </>
  )
}

export { Inventory }
