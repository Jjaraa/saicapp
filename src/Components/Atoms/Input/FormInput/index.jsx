import {
  FormLabel
} from '@chakra-ui/react'
import { SimpleInput } from '../SimpleInput'

function FormInput ({ inputType, inputId, onChange, children }) {
  return (
    <>
      <FormLabel mt={2}>{children}</FormLabel>
      <SimpleInput id={inputId} type={inputType} onChange={onChange} />
    </>
  )
}

export { FormInput }
