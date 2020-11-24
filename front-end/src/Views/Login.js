import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { login } from '../Services/login'

const Login = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await login({
        username, password
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (error) {
      console.log('wrong credentials')
    }
  }

  return (
    <Form onSubmit={handleLogin}>
      <Form.Group controlId="formBasicText">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Username" onChange={({ target }) => setUsername(target.value)} />
      </Form.Group>
      
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={({ target }) => setPassword(target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  )
}

export default Login