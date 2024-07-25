import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

function Contact() {
  const [contact,setContact] = useState({
    name:'',
    message:''
  })

  const handleSend=(event)=>{
    event.preventDefault();
     axios.post('http://localhost:8000/contact',contact)
      document.getElementById('form').reset()
  }

  return (
   <div style={{height:'500px'}} >
    <Container  className='mt-5 d-flex justify-content-center align-items-center'>
      <Row  className='mt-5 mb-5'>
       <img src="https://cdn.pixabay.com/photo/2017/01/17/03/57/desktop-1985856_640.jpg" alt="" style={{width:'400px',height:'370px'}} />
      </Row>
    <Form id='form' style={{width:'400px',backgroundColor:' rgb(221, 220, 211)'}} className='mt-5 mb-5 p-5 '>

<h4 className='text-center pt-3'>Contact Us</h4>

<InputGroup className='pt-3 pb-2'>
<Form.Control  placeholder="Name"  aria-label="Recipient's username"  aria-describedby="basic-addon2" name='name'  onChange={e=>setContact({...contact,name:e.target.value})}/>

<Button variant="outline-secondary" id="button-addon2">
  Button
</Button>
</InputGroup>


<InputGroup className='pt-3 pb-2'>
<Form.Control
  placeholder="Message" as="textarea"  aria-label="Recipient's username"  aria-describedby="basic-addon2" name='message' onChange={e=>setContact({...contact,message:e.target.value})} />

<Button variant="outline-secondary" id="button-addon2"  >
  Button
</Button>
</InputGroup>

<div className='text-center mt-3 pb-4'>
<Button type='submit' variant='secondary' onClick={handleSend}>Send</Button>
</div>


</Form>
    </Container>
   </div>
  )
}

export default Contact