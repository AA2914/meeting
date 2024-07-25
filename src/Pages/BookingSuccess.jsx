import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BookingSuccess() {
  return (
    <>

<Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand ></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/home">Back</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>


<div style={{backgroundColor:'green',height:'91vh'}} className='d-flex justify-content-center align-items-center'> 
      
         <h1 style={{color:'white',fontSize:'40px'}} className='text-center pt-3 '>SUCCESSFULLY BOOKED</h1>   

    </div>

    </>
   
  )
}

export default BookingSuccess