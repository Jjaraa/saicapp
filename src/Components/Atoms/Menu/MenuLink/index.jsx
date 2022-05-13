import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function MenuLink (props) {
  return (
    <Link {...props}>
      <Text fontSize='xl'>{props.children}</Text>
    </Link>
  )
}

export { MenuLink }
