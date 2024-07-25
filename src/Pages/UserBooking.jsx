import React, { useEffect, useState } from 'react'
import { Container, Navbar, Row } from 'react-bootstrap';
import Footer from './Footer'
import axios from 'axios';

function UserBooking() {

  const [userBooking,setuserBooking] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/Booking')
    .then(response =>setuserBooking(response.data))
    },[])

  return (
    <div>

    <Navbar className='bg-secondary'>
          <Container>
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                <a href="/card" className='text-light'>Back</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
    
    
    
        <div style={{backgroundColor:'  rgb(241, 238, 241)'}}>
    <Container className='pt-5 pb-5'>
          <Row   style={{border:'1px solid',backgroundColor:'white'}}>
    
            <h1 className='text-center mt-3 text-dark' style={{fontFamily:'"Gilda Display", serif'}}>Booking Details</h1>
            {
       
       <table className="table mt-3 " >
       <thead>
         <tr>
           <th scope="col">Id</th>
           <th scope="col">Name</th>
           <th scope="col">Adults</th>
           <th scope="col">Check In</th>
           <th scope="col">Children</th>
           <th scope="col">Check Out</th>
           <th scope="col">Phone Number</th>
           <th scope="col">Time</th>
    
          
         </tr>
       </thead>
       <tbody>
        {
         userBooking.map((d)=>{
      return<tr>
            <td>{d.id}</td>
            <td>{d.fullname}</td>
            <td>{d.adults}</td>
            <td>{d.checkin}</td>
            <td>{d.children}</td>
            <td>{d.checkout}</td>
            <td>{d.phonenumber}</td>
            <td>{d.time}</td>
    
           
    
            {/* <td>
            <Link to={`/read/${d.id}`} type="button" className="btn btn-primary">Read</Link>
            <Link to={`/update/${d.id}`}>Update</Link>
            <button onClick={() => handleDelete(d.id)}>Delete</button>
            </td> */}
          
         </tr>
        
         }
        )} 
    
     </tbody>
     </table>
       
    }
    
    </Row>
    
    </Container>
    
    </div>
    
    
    
    
    
    
    
    
    
    <Footer/>
    
        </div>
  )
}

export default UserBooking