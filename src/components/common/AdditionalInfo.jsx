import { Card } from 'react-bootstrap'

const AdditionalInfo = ({ chosenItem }) => {
  const { firstName, lastName, description, address } = chosenItem
  return (
    <Card body>
      <Card.Text>
        Выбран пользователь: <b>{`${firstName} ${lastName}`}</b>
      </Card.Text>
      <Card.Text>
        Описание: <b>{description || ''}</b>
      </Card.Text>
      <Card.Text>
        Адрес проживания: <b>{address?.streetAddress || ''}</b>
      </Card.Text>
      <Card.Text>
        Город: <b>{address?.city || ''}</b>
      </Card.Text>
      <Card.Text>
        Провинция/штат: <b>{address?.state || ''}</b>
      </Card.Text>
      <Card.Text>
        Индекс: <b>{address?.zip || ''}</b>
      </Card.Text>
    </Card>
  )
}

export default AdditionalInfo
