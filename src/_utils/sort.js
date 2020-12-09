export const sortItemsByKey = (items, key, method) => {
  const sortedItems = [...items]
  switch (method) {
    case 'asc': {
      sortedItems.sort((a, b) => {
        if (a[key] < b[key]) {
          return -1
        }
        if (a[key] > b[key]) {
          return 1
        }
        return 0
      })
      return sortedItems
    }
    case 'desc': {
      sortedItems.sort((a, b) => {
        if (a[key] > b[key]) {
          return -1
        }
        if (a[key] < b[key]) {
          return 1
        }
        return 0
      })
      return sortedItems
    }
    default:
      return sortedItems
  }
}
