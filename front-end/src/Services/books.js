import axios from 'axios'
const baseUrl = 'http://localhost:3001'

export const getBooks = async (filter) => {
  const result = await axios.get(`${baseUrl}/api/googlebooks/${filter}`)
  console.log(result.data)
  return result.data
}

let token = null

export const setTokenForBooks = newToken => {
  token = `bearer ${newToken}`
}

export const addBook = async (bookInfo) => {
  const config = {
    headers: { Authorization: token }
  }

  const bookData = {
    title: bookInfo.volumeInfo.title,
    author: bookInfo.volumeInfo.authors[0],
    rating: 1
  }
  const response = await axios.post(`${baseUrl}/api/googlebooks`, bookData, config)
  console.log(response)
}




