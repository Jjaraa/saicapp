import { SimpleInput } from '../../../Atoms/Input/SimpleInput'

function CompanyEditArea ({ company, handleCallback }) {
  return (
    <>
      <SimpleInput
        mt={2} placeholder='Nombre de la empresa' onChange={(e) => {
          handleCallback({ ...company, name: e.target.value })
        }}
      />
      <SimpleInput
        mt={2} placeholder='Rut de la empresa' onChange={(e) => {
          handleCallback({ ...company, rut: e.target.value })
        }}
      />
      <SimpleInput
        mt={2} placeholder='Giro de la empresa' onChange={(e) => {
          handleCallback({ ...company, giro: e.target.value })
        }}
      />
      <SimpleInput
        mt={2} placeholder='Dirección de la empresa' onChange={(e) => {
          handleCallback({ ...company, address: e.target.value })
        }}
      />
    </>
  )
}

export { CompanyEditArea }
