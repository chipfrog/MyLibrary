import React, { useState } from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import {  getBooks } from '../Services/googleBooks'

const Searchbar = (props) => { 
  const [text, setText] = useState('')

  const fetchBooks = async (event) => {
    event.preventDefault()
    const books = await getBooks(text)
    props.setBooks(books)
    clearSearhBar()
  }

  const handleChange = (event) => {
    event.preventDefault()
    setText(event.target.value)
  }

  const clearSearhBar = () => {
    document.getElementById('search bar').reset()
  }
 
  return (
    <Form className="mt-5 mb-5" id={'search bar'} onSubmit={fetchBooks}>
      <Row>
        <Col xs={{ span: 5, offset: 3 }} sm={{ span: 6, offset: 3 }} md={{ span: 6, offset: 2 }} lg={{ span: 6, offset: 2 }}>
          <Form.Control 
            type="text" 
            placeholder="Search books"
            onChange={handleChange}
          />
        </Col>
        <Col xs={1} >
          <Button variant="primary" type="submit">
            <BsSearch />
          </Button>
        </Col>
      </Row>
    </Form>    
  )
}

export default Searchbar
