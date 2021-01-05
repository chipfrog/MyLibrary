import { login } from '../Services/login'

const initialState = {
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