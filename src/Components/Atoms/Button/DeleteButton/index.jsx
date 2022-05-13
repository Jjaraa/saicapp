import { Button, Image } from '@chakra-ui/react'
import DeleteIcon from '../../../../../assets/Icons/ButtonIcons/delete.svg'

function DeleteButton (props) {
  return (
    <Button
      {...props}
      size='xs'
    >
      <Image src={DeleteIcon} boxSize='100%' alt='delete' />
    </Button>
  )
}

export { DeleteButton }
