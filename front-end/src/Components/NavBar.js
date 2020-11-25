import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigation = () => {

  return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand as={Link} to={"/"}>My Library</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to={"/search"}>Book finder</Nav.Link>
          <Nav.Link>User</Nav.Link>
          <Nav.Link>Logout</Nav.Link>
       </Nav>
      </Navbar>
    
  )
}

export default Navigation