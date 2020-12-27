import React from 'react'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { tryLogin } from '../Reducers/loginReducer'

const Login = () => {
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault()
    const username = event.target.username.value
    const password = event.target.password.value
    dispatch(tryLogin({ username, password }))
  }

  return (
    <Form className="mt-5" onSubmit={handleLogin}>
      <h2>Login</h2>
      <Form.Group as={Row} controlId="formBasicText">
        <Form.Label column sm={2}>Username</Form.Label>
        <Col md={5} lg={5}>
          <Form.Control type="text" name="username" placeholder="Username" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} controlId="formBasicPassword">
        <Form.Label column sm={2}>Password</Form.Label>
        <Col md={5} lg={5}>
          <Form.Control type="password" name="password" placeholder="Password"  />
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