import { React, useState } from 'react'
import { Container, Row, Col, Image, Button, Form, Collapse } from 'react-bootstrap'
import { useDispatch ,useSelector } from 'react-redux'
import { addBookToLibrary } from '../Reducers/loginReducer'

const BookInfo = () => {
  const dispatch = useDispatch()
  const info = useSelector(state => state.bookInfo)
  const token = useSelector(state => state.login.token)
  const bookInfo = info.bookInfo

  const [open, setOpen] = useState(false)
  const [review, setReview] = useState('')
  const [rating, setRating] = useState(1)
  

  if (bookInfo === null) {
    return (
      <h2>undefined</h2>
    )
  }

  const handleBookAdding = async (event) => {
    event.preventDefault()
    
    const test = {
      ...bookInfo,
      rating: rating,
      review: review
    }
    console.log(test)

    dispatch(addBookToLibrary(test, token))
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
          <Button onClick={() => setOpen(!open)} aria-controls="collapseForm">
            Add to Library
          </Button>
          {/* <Button onClick={() => handleBookAdding()}>
            Add to Library
          </Button> */}
        </Col>
        <Col>
        </Col>
        <Collapse in={open} >
          <Form onSubmit={handleBookAdding} >
            <Form.Group>
              <Form.Check 
                label="Book read"
              />
            </Form.Group>
            <Form.Group controlId="formGrade" >
              <Form.Label>Grade</Form.Label>
              <Form.Control 
                as="select" 
                value={rating}
                onChange={e => setRating(e.target.value)} 
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formReview" >
              <Form.Label>Review</Form.Label>
              <Form.Control 
                as="textarea"
                value={review}
                onChange={e => setReview(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
          </Form>
        </Collapse>  
      </Row>

      
    </Container>
    
  )
}

export default BookInfo