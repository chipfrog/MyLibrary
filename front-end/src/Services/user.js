import axios from 'axios'
const baseUrl = 'http://localhost:3001'

// export const setTokenForUser = newToken => {
//   token = `bearer ${newToken}`
// }

export const getUser = async (token) => {
  const bearerToken = `bearer ${token}`
  console.log(`token: ${bearerToken}`)

  const config = {
    headers: { Authorization: bearerToken }
  }
  const user = await axios.get(`${baseUrl}/api/user`, config)
  // console.log(`requested user: ${user.data}`)
  return user.data

}