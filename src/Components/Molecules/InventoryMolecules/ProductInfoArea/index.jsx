import { Td, Box, Text } from '@chakra-ui/react'

function ProductInfoArea ({ product }) {
  return (
    <>
      <Td>
        <Box w='50px'>
          <Text isTruncated>
            {product.id}
          </Text>
        </Box>
      </Td>
      <Td>
        <Box w='120px'>
          <Text isTruncated>
            {product.name}
          </Text>
        </Box>
      </Td>
      <Td>
        <Box w='120px'>
          <Text isTruncated>
            {product.observation}
          </Text>
        </Box>
      </Td>
      <Td isNumeric>{product.fraction}</Td>
      <Td isNumeric>${product.pricePackage}</Td>
      <Td isNumeric>${product.priceUnit}</Td>
    </>
  )
}

export { ProductInfoArea }
