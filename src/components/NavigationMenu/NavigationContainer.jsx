import { Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addNewRow, getTableData, filterTable } from '../../_redux/tableReducer'
import AddNewRow from './AddNewRow'
import Filter from '../common/Filter'
import UploadExampleData from './UploadExampleData'
import { useState } from 'react'

function NavigationContainer({
  headers,
  rows,
  filtersApplied,
  filterTable,
  addNewRow,
  getTableData,
}) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Navbar expand='lg' className='navbar'>
        <Nav className='mr-auto'>
          <UploadExampleData getTableData={getTableData} />
          <Nav.Link onClick={() => setOpen(!open)}>Добавить ряд</Nav.Link>
        </Nav>
        <Filter
          headers={headers}
          rows={rows}
          filterTable={filterTable}
          filtersApplied={filtersApplied}
        />
      </Navbar>
      {open && <AddNewRow headers={headers} rows={rows} addRow={addNewRow} />}
    </>
  )
}

const mapStateToProps = ({ table }) => ({
  headers: table.headers,
  rows: table.rows,
  filtersApplied: table.filtersApplied,
})

export default connect(mapStateToProps, {
  addNewRow,
  getTableData,
  filterTable,
})(NavigationContainer)
