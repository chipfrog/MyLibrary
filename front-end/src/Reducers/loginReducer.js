import { login } from '../Services/login'
import { addBook } from '../Services/books'

const initialState = {
  user: null,
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.data
    case 'LOGOUT':
      return action.data
    case 'ADD_BOOK':
      return {
        ...state, 
        user_books: [...state.user_books, action.data]}
      // return [...state, action.data]
    case 'UPDATE_BOOK':
      return state
    case 'DELETE_BOOK':
      return state
    case 'RESET':
      return initialState
      
    default:
      return state
  }
}

export const addBookToLibrary = (book, token) => {
  return async dispatch => {
    try {
      await addBook(book, token)
      
      const bookInfo = {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors[0],
        linkToCoverImage: book.volumeInfo.imageLinks.thumbnail,
        rating: 1
      }
      dispatch({
        type: 'ADD_BOOK',
        data: bookInfo
      })
    } catch (error) {
      console.log(error)
    }
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