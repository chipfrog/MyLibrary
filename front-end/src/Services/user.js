import axios from 'axios'
const baseUrl = 'http://localhost:3001'

let token = null

export const setTokenForUser = newToken => {
  token = `bearer ${newToken}`
}

export const getUser = async () => {
  const config = {
    headers: { Authorization: token }
  }
  const user = await axios.get(`${baseUrl}/api/user`, config)
  // console.log(`requested user: ${user.data}`)
  return user.data

}