import React, { useState } from 'react'
import './Adminlogin.css';
import Form from 'react-bootstrap/Form';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Adminlogin() {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate()

      
    const [validated, setValidated] = useState(false);
    
    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
    
      setValidated(true);
    };

    const handleLogin=()=>{

      if(name=='admin' && password=='admin'){
        navigate('/card')
      }else if(name || password =='coliza'){
        alert("only Admin can login this page")
        navigate('/home')
      }
   
    
   
    }
  return (
   
<section id='adminlogin' style={{height:'100vh'}} className=" d-flex justify-content-center align-items-center">
    <div  >

<Form  noValidate validated={validated} onSubmit={handleSubmit}  style={{border:'1px solid white',width:"400px",borderRadius:'10px',background:'none'}} className='ps-3 pe-3'>

<h1 className='text-center pt-3 text-light' style={{fontStyle:"italic",color:'black'}}>Admin Login Page </h1>

      <Row >

        <Form.Group   controlId="validationCustom01">
          <Form.Label style={{color:'white',fontWeight:'700',fontSize:'20px'}}>Name</Form.Label>
             <Form.Control required  type="text" id='name'  placeholder="name" name='name' style={{backgroundColor:'#999999'}}
            //  onChange={e=>setloginName({...loginName,mail:e.target.value})}
            value={name} onChange={(e) => setName(e.target.value)}  
            />
          <Form.Control.Feedback type="invalid" style={{color:"black",fontSize:'18px',fontWeight:'bold'}}>Please enter your name</Form.Control.Feedback>
        </Form.Group>

        <Form.Group   controlId="validationCustom01">
          <Form.Label className='mt-3' style={{color:'white',fontWeight:'700',fontSize:'20px'}}>Password</Form.Label>
             <Form.Control required  type="password"  placeholder="password" name='password'  style={{backgroundColor:'#999999'}}
            //  onChange={e=>setloginName({...loginName,password:e.target.value})}
            value={password}  onChange={(e) => setPassword(e.target.value)}  
             />
          <Form.Control.Feedback type="invalid" style={{color:"black",fontSize:'18px',fontWeight:'bold'}}>Please enter  password</Form.Control.Feedback>
        </Form.Group>
       
      </Row>

      <div className='text-center'>
      <Button className='mt-5 mb-5 ' type='submit' style={{backgroundColor:'lightgrey',color:'black',padding:'10px 50px 10px 50px'}} onClick={handleLogin}> LOGIN </Button> 
      </div>


      
    </Form>

</div>

</section>
    
  )
    
}

export default Adminlogin