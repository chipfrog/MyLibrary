import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import bookSearchReducer from './Reducers/bookSearchReducer'
import bookInfoReducer from './Reducers/bookInfoReducer'

const reducer = combineReducers({
  bookSearch: bookSearchReducer,
  bookInfo: bookInfoReducer,
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store