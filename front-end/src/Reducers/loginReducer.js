import { login } from '../Services/login'
import { setTokenForBooks } from '../Services/books'
import { setTokenForUser } from '../Services/user'

const initialState = {
  username: '',
  user: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return action.data
    default:
      return state
  }
}

export const tryLogout = () => {
  setTokenForBooks(null)
  setTokenForUser(null)
  return {
    type: 'LOGOUT',
    data: initialState
  }
}

export const tryLogin = ({ username, password }) => {
  console.log(`username: ${username}, password: ${password}`)
  return async dispatch => {
    try {
      const user = await login({ username, password })
      setTokenForBooks(user.token)
      setTokenForUser(user.token)
      dispatch({
        type: 'LOGIN',
        data: user
      })

    } catch(error) {
      console.log('wrong credentials!')
    }
  }
}

export default loginReducer