import cn from 'classnames'

const TableBody = ({ headers, rows, currentPage, setChosenItem }) => {
  const firstItemOnCurrentPage = (currentPage - 1) * 50 + 1
  const lastItemOnCurrentPage =
    currentPage * 50 < rows.length ? currentPage * 50 : rows.length

  const pageItems = rows.slice(
    firstItemOnCurrentPage - 1,
    lastItemOnCurrentPage
  )

  const handleClick = (index) => (e) => {
    setChosenItem(pageItems[index])
  }

  const rowsVisible = pageItems.map((row, i) => (
    <tr key={`row_${i}}`}>
      {headers.map((value, index) => (
        <td
          className={cn(value, 'row_element')}
          key={`td_${index}`}
          onClick={handleClick(i)}
        >
          {row[value]}
        </td>
      ))}
    </tr>
  ))

  return <tbody>{rowsVisible}</tbody>
}

export default TableBody
