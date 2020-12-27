import { getBooks } from '../Services/books'

const bookSearchReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOK_SEARCH':
      return action.data
    default:
      return state
  }
}

export const searchBooks = (filter) => {
  return async dispatch => {
    const books = await getBooks(filter)
    dispatch({
      type: 'BOOK_SEARCH',
      data: books,
    })
  }
}

export default bookSearchReducer