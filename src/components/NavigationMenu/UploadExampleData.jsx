import { NavDropdown } from 'react-bootstrap'

const UploadExampleData = ({ getTableData }) => {
  const bigDataUrl =
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  const smallDataUrl =
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

  const handleClick = (url) => (e) => {
    getTableData(url)
  }

  return (
    <NavDropdown id='basic-nav-dropdown' title='Загрузить таблицу'>
      <NavDropdown.Item onClick={handleClick(bigDataUrl)}>
        Большая таблица (1000)
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item onClick={handleClick(smallDataUrl)}>
        Небольшая таблица (32)
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default UploadExampleData
