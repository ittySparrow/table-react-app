import caretUp from '../../_assets/caretUp.svg'
import caretDown from '../../_assets/caretDown.svg'
import { useState } from 'react'

const TableHeaders = ({ headers, rows, sortTable }) => {
  const [columnsSorted, setColumnsSorted] = useState({
    id: 'asc',
    firstName: 'asc',
    lastName: 'asc',
    email: 'asc',
    phone: 'asc',
  })

  const handleClick = (key) => (e) => {
    const method = columnsSorted[key]
    sortTable(rows, key, method)
    setColumnsSorted({
      id: 'asc',
      firstName: 'asc',
      lastName: 'asc',
      email: 'asc',
      phone: 'asc',
      [key]: method === 'asc' ? 'desc' : 'asc',
    })
  }

  return (
    <thead>
      <tr>
        {headers.map((value) => (
          <th className='sort-th' key={value} onClick={handleClick(value)}>
            <div>
              {value}
              <img
                alt=''
                className='sort-img'
                src={columnsSorted[value] === 'asc' ? caretDown : caretUp}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  )
}

export default TableHeaders
