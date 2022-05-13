import { Text } from '@chakra-ui/react'

function CompanyInfoArea ({ company }) {
  return (
    <>
      <Text fontSize='2xl'>{company.name}</Text>
      <Text fontSize='2xl'>{company.rut}</Text>
      <Text fontSize='2xl'>{company.giro}</Text>
      <Text fontSize='2xl'>{company.address}</Text>
    </>
  )
}

export { CompanyInfoArea }
