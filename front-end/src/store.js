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

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store