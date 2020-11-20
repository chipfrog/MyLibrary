import React from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'

const Book = ({ info }) => {
  const bookInfo = info.volumeInfo

  if (bookInfo.imageLinks !== undefined) {
    return (
      <Card style={{ width: '24rem' }}>
        <Row>
          <Col>
            <Card.Img variant="top" src={bookInfo.imageLinks.thumbnail} style={{ width: '9rem' }}/>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{bookInfo.title}</Card.Title>
              <Card.Subtitle>{bookInfo.authors}</Card.Subtitle>
              <Button>Add</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    )
  }
  return null 
}

export default Book