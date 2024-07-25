import React, { useEffect, useState } from 'react'
import { Container, Navbar, Row } from 'react-bootstrap';
import Footer from './Footer'
import axios from 'axios';

function UserContact() {

  const [usercontact,setuserContact] = useState([])


  useEffect(()=>{
    axios.get('http://localhost:8000/contact')
    .then(response =>setuserContact(response.data))
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
    
          <Row style={{border:'1px solid',backgroundColor:'white'}} className='mt-5'>
    
            <h1 className='text-center mt-3 text-dark' style={{fontFamily:'"Gilda Display", serif'}}>Contact Details</h1>
    
            {
       
       <table className="table mt-3">
       <thead>
         <tr>
           <th scope="col">Id</th>
           <th scope="col">Name</th>
           <th scope="col">Email</th>
           <th scope="col">Message</th>
          
         </tr>
       </thead>
       <tbody>
        {
         usercontact.map((d)=>{
      return<tr>
            <td>{d.id}</td>
            <td>{d.name}</td>
            <td>{d.email}</td>
            <td>{d.message}</td>
    
          
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

export default UserContact