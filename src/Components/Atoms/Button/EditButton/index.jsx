import { Button, Image } from '@chakra-ui/react'
import EditIcon from '../../../../../assets/icons/ButtonIcons/edit.svg'

function EditButton (props) {
  return (
    <Button
      {...props}
      leftIcon={
        <Image src={EditIcon} alt='edit' />
    }
    />
  )
}

export { EditButton }
