import { Box } from '@chakra-ui/react'
import { DashMenu } from '../Components/Molecules/DashboardComponents/DashMenu'
function Dashboard () {
  return (
    <Box
      marginInline={5}
      marginBottom={20}
      marginTop={3}
      height='100vh'
      backgroundColor='#fafafa'
    >
      <DashMenu />
    </Box>
  )
}

export { Dashboard }
