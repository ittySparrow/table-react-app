import { Form, FormControl, InputGroup } from 'react-bootstrap'
import search from '../../_assets/search.svg'

const Filter = ({ headers, rows, filterTable, filtersApplied }) => {
  const handleChange = (e) => {
    const input = e.target.value
    filterTable(rows, input, filtersApplied, headers)
  }
  return (
    <Form inline>
      <InputGroup>
        <InputGroup.Prepend>
          <InputGroup.Text id='basic-addon1'>
            <img src={search} alt='search' />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          type='text'
          placeholder='Найти в таблице...'
          onChange={handleChange}
          className=' mr-sm-2'
        />
      </InputGroup>
    </Form>
  )
}
export default Filter
