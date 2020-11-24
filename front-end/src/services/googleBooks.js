import axios from 'axios'
const baseUrl = 'http://localhost:3001'

export const getBooks = async (filter) => {
  const result = await axios.get(`${baseUrl}/api/googlebooks/${filter}`)
  return result.data
}



