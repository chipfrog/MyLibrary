import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { login } from '../Services/login'
import { setToken } from '../Services/books'

const Login = ({ setUser, setUsername, setPassword, password, username }) => {

  const handleLogin = async (event) => {
    event.preventDefault() 
    
    try {
      const user = await login({ username, password })
      
      setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log('wrong credentials')
    }
  }

  return (
    <Form className="mt-5" onSubmit={handleLogin}>
      <h2>Login</h2>
      <Form.Group as={Row} controlId="formBasicText">
        <Form.Label column sm={2}>Username</Form.Label>
        <Col md={5} lg={5}>
          <Form.Control type="text" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} controlId="formBasicPassword">
        <Form.Label column sm={2}>Password</Form.Label>
        <Col md={5} lg={5}>
          <Form.Control type="password" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
        </Col>
      </Form.Group>
        <Button  variant="primary" type="submit">
          Login
        </Button>{' '}
        <Button  variant="success" type="submit">
          Create User
        </Button>
      </Form>
  )
}

export default Login