import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl
} from '@chakra-ui/react'
import { useState, useId } from 'react'
import { PrimaryButton } from '../../../Atoms/Button/PrimaryButton'
import { SecondaryButton } from '../../../Atoms/Button/SecondaryButton'
import { FormInput } from '../../../Atoms/Input/FormInput'

function AddProductModal ({ isOpen, onClose, addProduct }) {
  const id = useId()
  const [product, setProduct] = useState({
    id,
    name: '',
    observation: '',
    fraction: 0,
    pricePackage: 0,
    priceUnit: 0
  })
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Nuevo producto</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormInput
              inputType='text'
              inputId='name'
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            >
              Nombre del producto
            </FormInput>
            <FormInput
              inputType='text'
              inputId='name'
              onChange={(e) => setProduct({ ...product, observation: e.target.value })}
            >
              Observación
            </FormInput>
            <FormInput
              inputType='number'
              inputId='name'
              onChange={(e) => setProduct({ ...product, fraction: e.target.value })}
            >
              Fracción
            </FormInput>
            <FormInput
              inputType='number'
              inputId='name'
              onChange={(e) => setProduct({ ...product, pricePackage: e.target.value })}
            >
              Precio del paquete
            </FormInput>
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <SecondaryButton mr={3} onClick={onClose}>
            Cancelar
          </SecondaryButton>
          <PrimaryButton onClick={() => {
            const priceUnite = product.pricePackage / product.fraction
            setProduct({ ...product, priceUnit: priceUnite })
            addProduct(product)
            onClose()
          }}
          >
            Crear Producto
          </PrimaryButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export { AddProductModal }
