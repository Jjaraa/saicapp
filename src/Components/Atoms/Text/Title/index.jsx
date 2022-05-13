import { Text } from '@chakra-ui/react'

function Title (props) {
  return (
    <Text {...props} fontSize='3xl' fontWeight='bold'>{props.children}</Text>
  )
}

export { Title }
