import { Box } from '@chakra-ui/react'
import { DashboardMenu } from '../Components/Molecules/DashboardMenu'
import { Outlet } from 'react-router-dom'

function Dashboard () {
  return (
    <>
      <Box
        marginInline={5}
        marginTop={3}
      >
        <DashboardMenu />
      </Box>
      <Box
        marginInline={5}
        marginTop={3}
        backgroundColor='#fafafa'
        height='100vh'
      >
        <Outlet />
      </Box>
    </>
  )
}

export { Dashboard }
