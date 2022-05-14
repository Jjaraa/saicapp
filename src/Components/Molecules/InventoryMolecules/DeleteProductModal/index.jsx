import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/react'
import { PrimaryButton } from '../../../Atoms/Button/PrimaryButton'
import { SecondaryButton } from '../../../Atoms/Button/SecondaryButton'

function DeleteProductModal ({ isOpen, onClose, product, deleteProduct }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Borrando producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontWeight='bold' mb='1rem'>
            Está a punto de borrar un producto.
          </Text>
          <Text>
            Esta operación no se puede deshacer.
          </Text>
        </ModalBody>

        <ModalFooter>
          <SecondaryButton mr={3} onClick={onClose}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton onClick={() => {
            deleteProduct(product)
            onClose()
          }}
          >Borrar
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { DeleteProductModal }
