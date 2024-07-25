import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button, Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer'

function Cards() {
  return (
    <div>
        <Navbar className='bg-secondary'>
      <Container>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/home" className='text-light'>Log Out</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


<br />

        <Row xs={1} md={3} className="g-4">
      
        <Col >
          <Card>
            <Card.Img variant="top" src="https://img.freepik.com/premium-vector/account-login-line-icon-new-user-register_1948-2986.jpg" />
            <Card.Body className='text-center'>
              <Link to={'/userRegister'}><Button>User Register Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>


        <Col >
          <Card>
            <Card.Img variant="top" src="https://previews.123rf.com/images/deimosz/deimosz1502/deimosz150200866/36532172-blue-circle-vintage-style-hotel-or-apartment-booking-sign-icon-sticker-or-label-isolated-on-white.jpg" />
            <Card.Body className='text-center'>
            <Link to={'/userBooking'}><Button>User Booking Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>


        <Col >
          <Card>
            <Card.Img variant="top" src="https://media.istockphoto.com/id/1188628645/vector/tasks-symbol-vector-sign-white-icon-isolated-on-gray-background-simple-logo-vector.jpg?s=612x612&w=0&k=20&c=WYOop4L08W3EaNLcpDOWaHfo3fBESOk1VCGMeWO-S4Q=" />
            <Card.Body className='text-center'>
            <Link to={'/userContact'}><Button>User Contact Details</Button></Link>
            </Card.Body>
          </Card>
        </Col>
      
    </Row> 

<br />

 <Footer/> 

    
    </div>
  )
}

export default Cards