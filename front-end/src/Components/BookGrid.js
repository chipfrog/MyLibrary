import { Row, Col } from 'react-bootstrap';
import Book from './Book'

const BookGrid = ({ books }) => {
  let size = Object.keys(books).length
  let rows = []
  let rowCounter = 0
  let itemCounter = 0
  

  for (let i = 0; i < size; i ++) {
    if (!(itemCounter % 6)) {
      rowCounter ++
      rows[rowCounter] = []
    }
    // Adds only books with cover image
    if (books[i].volumeInfo.imageLinks !== undefined) {
      rows[rowCounter].push(books[i])
      itemCounter ++
    }
  }
  
  return (
    <div >
      {rows.map(row => {
        return (
        <Row className='text-center'>
          {row.map(book => {
            return (
              <Col sm={6} md={4} lg={2} key={book.id}>
                <Book info={book} key={book.id}/>
              </Col>
            )
          })}
        </Row>
        )
      })}
    </div>
  )
}

export default BookGrid