import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'

const Book = ({ info }) => {


  if (info.volumeInfo.imageLinks !== undefined) {
    return (
      <Card style={{ width: '24rem' }}>
        <Row>
          <Col>
            <Card.Img variant="top" src={info.volumeInfo.imageLinks.thumbnail} style={{ width: '9rem' }}/>
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{info.volumeInfo.title}</Card.Title>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    )
  }
  return null 
}

export default Book