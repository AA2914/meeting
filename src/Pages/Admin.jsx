import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import  Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Admin() {

    const [user,setUser] = useState([])
    const [admin,setAdmin] = useState([])
    const [contact,setContact] = useState([])
  
    useEffect(()=>{
    axios.get('http://localhost:8000/Booking')
    .then(response =>setUser(response.data))
    },[])
  
    
    useEffect(()=>{
      axios.get('http://localhost:8000/register')
      .then(response =>setAdmin(response.data))
      },[])

      useEffect(()=>{
        axios.get('http://localhost:8000/contact')
        .then(response =>setContact(response.data))
        },[])

  return (
    <>

<Navbar collapseOnSelect expand="lg" className="bg-secondary">
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
            <Nav.Link href="dining">Dining</Nav.Link>
            <Nav.Link href="meetings">Meetings</Nav.Link>

           <Form className="d-flex ms-5">
            <Button variant="outline-light" href='/home'>Log out</Button>
          </Form>           

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

<Container className='mb-5'>
      <Row  className='mt-5' style={{border:'1px solid'}}>

        <h1 className='text-center mt-5 text-dark'>Booking Details</h1>
        {
   
   <table className="table mt-3 " >
   <thead>
     <tr>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">Company Name</th>
       <th scope="col">Check In</th>
       <th scope="col">Check Out</th>
       <th scope="col">Phone Number</th>
      
     </tr>
   </thead>
   <tbody>
    {
     user.map((d)=>{
  return<tr>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.companyname}</td>
        <td>{d.checkin}</td>
        <td>{d.checkout}</td>
        <td>{d.phonenumber}</td>
          
     </tr>
    
     }
    )} 

 </tbody>
 </table>
   
}

</Row>

<Row style={{border:'1px solid'}} className='mt-5 mb-5'>

        <h1 className='text-center mt-4 text-dark'>Register Details</h1>

        {
   
   <table className="table mt-3">
   <thead>
     <tr>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">address</th>
       <th scope="col">phonenumber</th>
       <th scope="col">mail</th>
      

      
     </tr>
   </thead>
   <tbody>
    {
     admin.map((d)=>{
  return<tr>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.address}</td>
        <td>{d.phonenumber}</td>
        <td>{d.mail}</td>


       

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


      <Row style={{border:'1px solid'}} className='mt-5 mb-5'>

        <h1 className='text-center mt-4 text-dark'>Contact Details</h1>

        {
   
   <table className="table mt-3">
   <thead>
     <tr>
       <th scope="col">Id</th>
       <th scope="col">Name</th>
       <th scope="col">Message</th>
      

      
     </tr>
   </thead>
   <tbody>
    {
     contact.map((d)=>{
  return<tr>
        <td>{d.id}</td>
        <td>{d.name}</td>
        <td>{d.message}</td>
      
     </tr>
    
     }
    )} 

 </tbody>
 </table>
   
}
      
      </Row>
      
     

    </Container>

    </>
    )
}

export default Admin