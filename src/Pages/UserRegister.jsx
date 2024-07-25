import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './Footer'
import axios from 'axios';
import { Row } from 'react-bootstrap';

function UserRegister() {

  const [userRegister,setuserRegister] = useState([])

  useEffect(()=>{
    axios.get('http://localhost:8000/register')
    .then(response =>setuserRegister(response.data))
    },[])

  return (
    <>

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
 

<Row style={{border:'1px solid',backgroundColor:'white'}} className='mt-5 mb-5'>

        <h1 className='text-center mt-3 text-dark' style={{fontFamily:'"Gilda Display", serif'}}>Register Details</h1>

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
     userRegister.map((d)=>{
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
  
</Container>

</div>

<Footer/>

    </>
  )
}

export default UserRegister