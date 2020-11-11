import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import {  getBooks } from '../services/googleBooks'

const Searchbar = (props) => { 
  const [text, setText] = useState('')

  const fetchBooks = (event) => {
    event.preventDefault()
    const books = getBooks(text)
    props.setBooks(books)
    setText('')
  }

  const handleChange = (event) => {
    event.preventDefault()
    setText(event.target.value)
  }
 
  return (
    <Form onSubmit={fetchBooks}>
      <Row>
        <Col>
          <Form.Control 
            type="text" 
            placeholder="Search books"
            onChange={handleChange}
          />
        </Col>
        <Col>
          <Button variant="primary" type="submit">
            <BsSearch />
          </Button>
        </Col>
      </Row>
    </Form>    
  )
}

export default Searchbar
