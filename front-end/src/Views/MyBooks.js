import { useSelector  } from 'react-redux'
import { Image } from 'react-bootstrap'

const MyBooks = () => {
  const books = useSelector(state => state.login.user_books)

  return (
    <div>
      <h1 className="mt-3 text-center">My Library</h1>
      {books.map(book => {
        return (
          <Image src={book.linkToCoverImage} key={book.id} />
        )
      })}
    </div>
  )
}

export default MyBooks