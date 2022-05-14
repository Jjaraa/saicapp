import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer
} from '@chakra-ui/react'
import { Product } from '../../../Molecules/InventoryMolecules/Product'

function ProductsList ({ products, updateProduct, deleteProduct }) {
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
                  <Product
                    key={product.id}
                    product={product}
                    updateProduct={updateProduct}
                    deleteProduct={deleteProduct}
                  />
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
