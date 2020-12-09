import { useEffect, useState } from 'react'
import { Button, Card, Form, Table } from 'react-bootstrap'
import { allFieldsHasValues } from '../../_utils/validation'

const AddNewRow = ({ rows, headers, addRow }) => {
  const [formValid, setFormValid] = useState(false)
  const [inputs, setInputs] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const formValidation = () => {
    if (allFieldsHasValues(inputs)) {
      setFormValid(true)
    } else {
      setFormValid(false)
    }
  }
  useEffect(formValidation, [inputs])

  const handleSubmit = (e) => {
    e.preventDefault()
    addRow(rows, inputs)
    setInputs({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    })
  }

  const handleChange = (field) => (e) => {
    setInputs({
      ...inputs,
      [field]: e.target.value,
    })
  }

  return (
    <Card body>
      <Form>
        <Table size='sm' striped bordered hover>
          <thead>
            <tr>
              {headers.map((value) => (
                <th key={`th_${value}`}>{value}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {headers.map((value) => (
                <td key={`td_${value}`}>
                  <input
                    value={inputs[value]}
                    onChange={handleChange(value)}
                    className='form-control'
                  />
                </td>
              ))}
            </tr>
          </tbody>
        </Table>
        <Button
          type='submit'
          variant='secondary'
          disabled={!formValid}
          onClick={handleSubmit}
        >
          Добавить в таблицу
        </Button>
      </Form>
    </Card>
  )
}
export default AddNewRow
