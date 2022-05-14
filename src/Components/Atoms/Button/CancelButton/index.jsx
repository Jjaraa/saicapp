import { Button, Image } from '@chakra-ui/react'
import CancelIcon from '../../../../../assets/Icons/ButtonIcons/cancel.svg'

function CancelButton (props) {
  return (
    <Button
      {...props}
      boxSize='50px'
    >
      <Image src={CancelIcon} boxSize='100%' alt='cancel' />
    </Button>
  )
}

export { CancelButton }
