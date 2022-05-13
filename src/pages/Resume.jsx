import { Box } from '@chakra-ui/react'
import { CompanyInfo } from '../Components/Organisms/ResumeOrganisms/CompanyInfo'

function Resume () {
  return (
    <Box padding={20}>
      <Box>
        <CompanyInfo />
      </Box>
    </Box>
  )
}

export { Resume }
