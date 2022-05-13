import { Button, Image } from '@chakra-ui/react'
import EditIcon from '../../../../../assets/Icons/ButtonIcons/edit.svg'

function EditButton (props) {
  return (
    <Button
      {...props}
      size='xs'
    >
      <Image src={EditIcon} boxSize='100%' alt='edit' />
    </Button>
  )
}

export { EditButton }
