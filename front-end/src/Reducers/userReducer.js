import { getUser } from '../Services/user'

const userReducer = (state = null, action) => {
  switch(action.type) {
    case 'GET_USER':
      return action.data.user
    default:
      return state  
  }
}

export const getUserInfo = (token) => {
  return async dispatch => {
    try {
      const user = await getUser(token)
      dispatch({
        type: 'GET_USER',
        data: user
      })
    } catch (error) {
      console.log('could not get user information')
    }
  }
}

export default userReducer