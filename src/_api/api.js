const api = {
  getData: async (url) => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (e) {
      throw e
    }
  },
}

export default api
