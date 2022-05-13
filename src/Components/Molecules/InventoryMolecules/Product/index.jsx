import {
  Flex,
  Tr,
  Td
} from '@chakra-ui/react'
import { EditButton } from '../../../Atoms/Button/EditButton'
import { DeleteButton } from '../../../Atoms/Button/DeleteButton'

function Product ({ product }) {
  return (
    <Tr>
      <Td>{product.id}</Td>
      <Td>{product.name}</Td>
      <Td>{product.observation}</Td>
      <Td isNumeric>{product.fraction}</Td>
      <Td isNumeric>{product.pricePackage}</Td>
      <Td isNumeric>{product.priceUnit}</Td>
      <Td>
        <Flex gap={2}>
          <EditButton />
          <DeleteButton />
        </Flex>
      </Td>
    </Tr>
  )
}

export { Product }
