import { Container, Row, Col } from 'react-bootstrap';
import Book from './Book'

const BookGrid = ({ books }) => {
  console.log(books)
  let size = Object.keys(books).length
  console.log(size)
  
  let rows = []
  let rowCounter = 0
  let itemCounter = 0
  

  for (let i = 0; i < size; i ++) {
    if (!(itemCounter % 4)) {
      rowCounter ++
      rows[rowCounter] = []
    }
    rows[rowCounter].push(books[i])
    itemCounter ++
  }

  console.log(rows)
  
  
  return (
    <Container>
      {rows.map(row => {
        return (
        <Row>
          {row.map(book => {
            return (
              <Col key={book.id}>
                <Book info={book} key={book.id}/>
              </Col>
            )
          })}
        </Row>
        )
      })}
    </Container>
  )
}

export default BookGrid