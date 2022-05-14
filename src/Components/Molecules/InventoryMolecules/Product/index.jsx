import {
  Flex,
  Tr,
  Td,
  useDisclosure
} from '@chakra-ui/react'
import { useState } from 'react'
import { EditButton } from '../../../Atoms/Button/EditButton'
import { DeleteButton } from '../../../Atoms/Button/DeleteButton'
import { SaveButton } from '../../../Atoms/Button/SaveButton'
import { CancelButton } from '../../../Atoms/Button/CancelButton'
import { ProductInfoArea } from '../ProductInfoArea'
import { ProductEditArea } from '../ProductEditArea'
import { DeleteProductModal } from '../DeleteProductModal'

function Product ({ product, updateProduct, deleteProduct }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedProduct, setEditedProduct] = useState(product)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleCallback = (_product) => {
    setEditedProduct(_product)
  }

  return (
    <>
      <Tr>
        {
        isEditing
          ? <ProductEditArea product={editedProduct} handleCallback={handleCallback} />
          : <ProductInfoArea product={product} />
      }
        <Td>
          <Flex gap={2}>
            {
            isEditing
              ? <>
                <CancelButton onClick={() => {
                  setEditedProduct(product)
                  setIsEditing(false)
                }}
                />
                <SaveButton
                  onClick={() => {
                    updateProduct(editedProduct)
                    setIsEditing(false)
                  }}
                />
                </> // eslint-disable-line
              : <>
                <EditButton
                  onClick={() => setIsEditing(true)}
                />
                <DeleteButton
                  onClick={onOpen}
                />
                </> // eslint-disable-line
          }

          </Flex>
        </Td>
      </Tr>
      <DeleteProductModal
        isOpen={isOpen}
        onClose={onClose}
        product={product}
        deleteProduct={deleteProduct}
      />
    </>
  )
}

export { Product }
