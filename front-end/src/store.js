import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import bookSearchReducer from './Reducers/bookSearchReducer'
import bookInfoReducer from './Reducers/bookInfoReducer'
import loginReducer from './Reducers/loginReducer'
import userReducer from './Reducers/userReducer'

const reducer = combineReducers({
  bookSearch: bookSearchReducer,
  bookInfo: bookInfoReducer,
  login: loginReducer,
  user: userReducer
})

const saveUserState = (state) => {
  try {
    const userState = JSON.stringify(state)
    localStorage.setItem('userState', userState)
  } catch (error) {
    return undefined
  }
}

const getUserState = () => {
  try {
    const userStateInStorage = localStorage.getItem('userState')
    if (userStateInStorage === null) {
      return undefined
    }
    return JSON.parse(userStateInStorage)
  } catch (error) {
    return undefined
  }
}

const stateFromLocalStorage = getUserState()

const store = createStore(
  reducer,
  stateFromLocalStorage,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

store.subscribe(() => {
  saveUserState(store.getState())
})

export default store