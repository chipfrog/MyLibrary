import axios from 'axios'
const baseUrl = 'http://localhost:3001'

export const getBooks = async (filter) => {
  console.log(baseUrl)
  console.log(filter)
  const result = await axios.get(`${baseUrl}/${filter}`)
  console.log(result)
  return result
}



