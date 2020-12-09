import { connect } from 'react-redux'
import { Table } from 'react-bootstrap'
import {
  sortTable,
  setCurrentPage,
  setChosenItem,
} from '../../_redux/tableReducer'
import Paginator from '../common/Paginator'
import TableHeaders from './TableHeaders'
import TableBody from './TableBody'
import AdditionalInfo from '../common/AdditionalInfo'
import Preloader from '../common/Preloader'

const TableContainer = ({
  rows,
  headers,
  filteredRows,
  filtersApplied,
  currentPage,
  isFetching,
  setCurrentPage,
  setChosenItem,
  chosenItem,
  sortTable,
}) => {
  const shownItems = filtersApplied.length ? filteredRows : rows

  return (
    <>
      <Table size='sm' bordered hover>
        <TableHeaders headers={headers} rows={rows} sortTable={sortTable} />
        <TableBody
          isFetching={isFetching}
          currentPage={currentPage}
          headers={headers}
          rows={shownItems}
          setChosenItem={setChosenItem}
        />
      </Table>
      {isFetching && <Preloader />}
      {!isFetching && (
        <Paginator
          totalItemsCount={shownItems.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      )}
      {chosenItem && <AdditionalInfo chosenItem={chosenItem} />}
    </>
  )
}

const mapStateToProps = ({ table }) => ({
  headers: table.headers,
  rows: table.rows,
  filteredRows: table.filteredRows,
  filtersApplied: table.filtersApplied,
  currentPage: table.currentPage,
  chosenItem: table.chosenItem,
  isFetching: table.isFetching,
})

export default connect(mapStateToProps, {
  setCurrentPage,
  setChosenItem,
  sortTable,
})(TableContainer)
