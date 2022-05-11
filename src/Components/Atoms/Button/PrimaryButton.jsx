import { Button } from '@chakra-ui/react'

function PrimaryButton (props) {
  return (
    <Button
      {...props}
      colorScheme='purple'
    >
      {props.children}
    </Button>
  )
}

export { PrimaryButton }
