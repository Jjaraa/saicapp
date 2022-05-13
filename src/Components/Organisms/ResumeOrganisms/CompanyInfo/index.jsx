import {
  Flex,
  Box
} from '@chakra-ui/react'
import { useState } from 'react'
import { PrimaryButton } from '../../../Atoms/Button/PrimaryButton'
import { SecondaryButton } from '../../../Atoms/Button/SecondaryButton'
import { CompanyInfoArea } from '../../../Molecules/ResumeMolecules/CompanyInfoArea'
import { CompanyEditArea } from '../../../Molecules/ResumeMolecules/CompanyEditArea'
import { Title } from '../../../Atoms/Text/Title'

// feed para la empresa
const feedCompany = {
  name: 'Empresa uno',
  rut: '12345678-9',
  giro: 'Electrónica',
  address: 'Av. Las Flores 123'
}

function CompanyInfo () {
  const [isEditing, setIsEditing] = useState(false)
  const [company, setCompany] = useState(feedCompany)
  const [editedCompany, setEditedCompany] = useState(company)

  function handleCallback (_company) {
    setEditedCompany(_company)
  }

  return (
    <Box w='50%'>
      <Flex gap={3}>
        <Title>Datos de la empresa</Title>
        <>
          {
            isEditing
              ? <>
                <SecondaryButton onClick={() => {
                  setEditedCompany(company)
                  setIsEditing(false)
                }}
                >Cancelar
                </SecondaryButton>
                <PrimaryButton onClick={() => {
                  setCompany(editedCompany)
                  setIsEditing(false)
                }}
                >Guardar
                </PrimaryButton>
                </> // eslint-disable-line
              : <SecondaryButton onClick={() => setIsEditing(true)}>Editar</SecondaryButton>
          }
        </>
      </Flex>
      {
        isEditing
          ? <CompanyEditArea company={editedCompany} handleCallback={handleCallback} />
          : <CompanyInfoArea company={company} />
      }
    </Box>
  )
}

export { CompanyInfo }
