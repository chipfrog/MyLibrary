import { login } from '../Services/login'
import { setToken } from '../Services/books'

const initialState = {
  username: '',
  user: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data   
    default:
      return state
  }
}

export const tryLogin = ({ username, password }) => {
  console.log(`username: ${username}, password: ${password}`)
  return async dispatch => {
    try {
      const user = await login({ username, password })
      setToken(user.token)
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