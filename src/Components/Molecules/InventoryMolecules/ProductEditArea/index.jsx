import { Td } from '@chakra-ui/react'
import { SimpleInput } from '../../../Atoms/Input/SimpleInput'

function ProductEditArea ({ product, handleCallback }) {
  return (
    <>
      <Td>{product.id}</Td>
      <Td>
        <SimpleInput
          placeholder={product.name} onChange={(e) => {
            handleCallback({ ...product, name: e.target.value })
          }}
        />
      </Td>
      <Td>
        <SimpleInput
          placeholder={product.observation} onChange={(e) => {
            handleCallback({ ...product, observation: e.target.value })
          }}
        />
      </Td>
      <Td isNumeric>
        <SimpleInput
          placeholder={product.fraction} onChange={(e) => {
            handleCallback({ ...product, fraction: e.target.value })
          }}
        />
      </Td>
      <Td isNumeric>
        <SimpleInput
          placeholder={product.pricePackage} onChange={(e) => {
            handleCallback({ ...product, pricePackage: e.target.value })
          }}
        />
      </Td>
      <Td isNumeric>
        <SimpleInput
          placeholder={product.priceUnit} onChange={(e) => {
            handleCallback({ ...product, priceUnit: e.target.value })
          }}
        />
      </Td>
    </>
  )
}
export { ProductEditArea }
