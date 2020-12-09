export const filterTableByInput = (items, input, keys) => {
  let filteredItems = [...items]
  const value = input.toLowerCase()
  filteredItems = items.filter((row) => {
    for (let key of keys) {
      const innerText = String(row[key]).toLowerCase()
      if (innerText.includes(value)) return true
    }
  })
  return filteredItems
}
