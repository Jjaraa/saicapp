import { Button, Image } from '@chakra-ui/react'
import SaveIcon from '../../../../../assets/Icons/ButtonIcons/save.svg'

function SaveButton (props) {
  return (
    <Button
      {...props}
      colorScheme='purple'
      boxSize='50px'
    >
      <Image src={SaveIcon} boxSize='100%' alt='delete' />
    </Button>
  )
}

export { SaveButton }
