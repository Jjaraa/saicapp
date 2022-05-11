import { Button } from '@chakra-ui/react'

function SecundaryButton (props) {
  return (
    <Button
      {...props}
      colorScheme='green'
    >
      {props.children}
    </Button>
  )
}

export { SecundaryButton }
