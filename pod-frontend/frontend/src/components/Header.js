import React from 'react'
import {Navbar, Nav, Form , Button, FormControl, Container} from 'react-bootstrap'
import { isAuthorized } from '../utilities/utilityfunctions'

const Header = () => {

  return (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top'>
    <Container>
      <Navbar.Brand href="/">Employee Management System</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        {isAuthorized() && <Nav className="me-auto">
          <Nav.Link href="/viewallemployees">View Employees</Nav.Link>
          <Nav.Link href="/addemployee">Add Employee</Nav.Link>
        </Nav>}
        <Nav>
          
          <Button variant="link" onClick={()=>{localStorage.removeItem("user");window.location.reload(false)}}>Logout</Button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header