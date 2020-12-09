import { Alert } from 'react-bootstrap'

const ErrorMessage = ({ error, showError }) => {
  return (
    <Alert variant='danger' onClose={() => showError(null)} dismissible>
      <Alert.Heading>Ошибка</Alert.Heading>
      <p>{error}</p>
    </Alert>
  )
}

export default ErrorMessage
