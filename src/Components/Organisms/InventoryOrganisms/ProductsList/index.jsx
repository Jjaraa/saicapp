import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer
} from '@chakra-ui/react'
import { useState } from 'react'
import { Product } from '../../../Molecules/InventoryMolecules/Product'

const feedProducts = [
  {
    id: 1,
    name: 'Producto 1',
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

function ProductsList () {
  const [products, setProducts] = useState(feedProducts)
  return (
    <>
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>CÓDIGO</Th>
              <Th>NOMBRE DE PRODUCTO</Th>
              <Th>OBSERVACIÓN</Th>
              <Th isNumeric>FRACCIÓN</Th>
              <Th isNumeric>PRECIO PAQUETE</Th>
              <Th isNumeric>PRECIO UNIDAD</Th>
              <Th>ACCIÓN</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              products.map(product => {
                return (
                  <Product key={product.id} product={product} />
                )
              })
            }
          </Tbody>
        </Table>
      </TableContainer>
    </>
  )
}

export { ProductsList }
