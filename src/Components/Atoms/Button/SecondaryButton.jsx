import { Button } from '@chakra-ui/react'

function SecundaryButton (props) {
  return (
    <Button
      {...props}
      colorScheme='purple'
      variant='ghost'
    >
      {props.children}
    </Button>
  )
}

export { SecundaryButton }
