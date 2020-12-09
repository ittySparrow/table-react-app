import { Pagination } from 'react-bootstrap'

const Paginator = ({
  totalItemsCount,
  pageSize = 50,
  currentPage,
  setCurrentPage,
}) => {
  const pagesTotal = Math.ceil(totalItemsCount / pageSize)
  const pages = []

  const lastShownPage =
    currentPage < 3 ? 3 : currentPage > 18 ? 20 : currentPage + 1
  const firstShownPage =
    currentPage < 3 ? 1 : currentPage > 19 ? 18 : currentPage - 1
  for (let i = firstShownPage; i <= lastShownPage; i += 1) {
    pages.push(i)
  }

  const pagesNavigation = pages.map((page, i) => (
    <Pagination.Item
      key={i}
      active={currentPage === page}
      onClick={() => setCurrentPage(page)}
    >
      {page}
    </Pagination.Item>
  ))

  return (
    pagesTotal > 1 && (
      <Pagination>
        <Pagination.First
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(1)}
        />
        <Pagination.Prev
          disabled={currentPage <= 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        {pagesNavigation}
        <Pagination.Next
          disabled={currentPage >= pagesTotal}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
        <Pagination.Last
          disabled={currentPage >= pagesTotal}
          onClick={() => setCurrentPage(pagesTotal)}
        />
      </Pagination>
    )
  )
}

export default Paginator
