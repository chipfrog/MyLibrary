import React from 'react'
import { Container, Row, Col, Image, Button } from 'react-bootstrap'
// import { addBook } from '../Services/books'
import { useDispatch ,useSelector } from 'react-redux'
import { addBookToLibrary } from '../Reducers/loginReducer'

const BookInfo = () => {
  const dispatch = useDispatch()
  const info = useSelector(state => state.bookInfo)
  const token = useSelector(state => state.login.token)
  const bookInfo = info.bookInfo

  if (bookInfo === null) {
    return (
      <h2>undefined</h2>
    )
  }

  const handleBookAdding = async () => {
    dispatch(addBookToLibrary(bookInfo, token))
    // await addBook(bookInfo, token)
  }
  // Korjaa näkymä, kun kirjalijoita enemmän kuin yksi!
  
  return (
    <Container className="pt-4 text-center">
      <h2>{bookInfo.volumeInfo.title}</h2>
      <h3>{bookInfo.volumeInfo.subtitle}</h3>
      <h5><i>{bookInfo.volumeInfo.authors}</i></h5>
      <Row className="pt-4">
        <Col md={6}>
          <Image src={bookInfo.volumeInfo.imageLinks.thumbnail} />
        </Col>
        <Col className="text-justify">
          {bookInfo.volumeInfo.description}
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={() => handleBookAdding()}>
            Add to Library
          </Button>
        </Col>
        <Col>
        
        </Col>  
      </Row>
    </Container>
  )
}

export default BookInfo