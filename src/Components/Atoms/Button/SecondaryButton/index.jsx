import { Button } from '@chakra-ui/react'

function SecondaryButton (props) {
  return (
    <Button
      {...props}
      colorScheme='purple'
      variant='outline'
    >
      {props.children}
    </Button>
  )
}

export { SecondaryButton }
