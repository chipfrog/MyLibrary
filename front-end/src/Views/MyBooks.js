import { useDispatch, useSelector  } from 'react-redux'
import { Button } from 'react-bootstrap'

const MyBooks = () => {
  const dispatch = useDispatch()
  const books = useSelector(state => state.login.user_books)
  
  const handleBooks = (event) => {
    event.preventDefault()
    for(let i = 0; i < books.length; i ++) {
      console.log(books[i].title)
    }
  }

  return (
    <div>
      <h1 className="mt-3 text-center">My Library</h1>
      <Button onClick={handleBooks} >print user's library</Button>
    </div>
  )
}

export default MyBooks