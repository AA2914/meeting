import React from 'react'
import './Navbar1.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


function Navbar1() {

 


  return (
    <>
 <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="me-auto">
            <Nav.Link >The Ritz-Carlton, Melbourne</Nav.Link>           
          </Nav>

          <Nav>
            <Nav.Link href="home">Overview</Nav.Link>
            <Nav.Link href="gallary">Gallery</Nav.Link>
            <Nav.Link href="suites">Suites & Rooms</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="https://www.google.com/maps/place/37%C2%B048'50.5%22S+144%C2%B057'11.2%22E/@-37.8140263,144.9530959,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-37.8140263!4d144.9530959?hl=en&entry=ttu">View Map</Nav.Link>


            <Dropdown >
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Login
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="adminlogin">Admin Login</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  

    </>
  )
}



export default Navbar1