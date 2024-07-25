import axios from 'axios';
import './Register.css';
import React, { useState } from 'react'
import { Button,  Col,  Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'


function Register() {

  const [registerName, setregisterName] = useState({
    name: '',
    address:'',
    email: '',
    password: '',
  })

      const [errors, setErrors] = useState({});

      const navigate = useNavigate()
     
    
    const handleRegister=((event)=>{
          event.preventDefault();
    
          let tempErrors = {};
          let isValid = true;
      
          if (!registerName.name) {
            tempErrors["name"] = "Name is required";
            isValid = false;
          }

          if (!registerName.address) {
            tempErrors["address"] = "address is required";
            isValid = false;
          }
        
          if (!registerName.email) {
              tempErrors["email"] = "Email is required";
              isValid = false;
          } else if (!/\S+@\S+\.\S+/.test(registerName.email)) {
              tempErrors["email"] = "Email is not valid";
              isValid = false;
          }
        
          if (!registerName.password) {
              tempErrors["password"] = "Password is required";
              isValid = false;
          }
        
        
      
        if(isValid){
          event.preventDefault();
               axios.post('http://localhost:8000/register', registerName)
               .then(response=>{console.log(response);})
               .catch(err=>console.log(err))
                alert('Register Successfull')
                navigate('/')
       
        }else {
          setErrors(tempErrors);
      }
    
         
         
       })
        

  return (
    <section id='register' className=' d-flex justify-content-center align-items-center'>
    <div >
    <Form onSubmit={handleRegister} style={{border:'10px solid white',width:"500px"}} className='ps-3 pe-3 '>
           <h1 className='text-center ' style={{fontStyle:"italic"}}> Register Page </h1>

           <Row >
           <Col >
          <Form.Group   >
          <Form.Label md className='pt-3'>Name</Form.Label>
             <Form.Control  required  type="text"  placeholder="name" name='name' 
               className={`form-control ${errors.name ? 'is-invalid' : ''}`}
             onChange={e=>setregisterName({...registerName,name:e.target.value})}
            // value={uname}  onChange={(e) => setName(e.target.value)}
             />
         {errors.name && <div className="invalid-feedback">{errors.name}</div>}
          {/* <Form.Control.Feedback type="invalid">Please enter your fullname</Form.Control.Feedback> */}
         </Form.Group>

         </Col>
      <Col md>

         <Form.Group  >
         <Form.Label className='mt-3'>Address</Form.Label>
             <Form.Control  required  type="text"  placeholder="address" name='address' 
              className={`form-control ${errors.address ? 'is-invalid' : ''}`} 
             onChange={e=>setregisterName({...registerName,address:e.target.value})}
            // value={address}  onChange={(e) => setAddress(e.target.value)}
             />
             {errors.address && <div className="invalid-feedback">{errors.address}</div>}
        {/* <Form.Control.Feedback type="invalid">Please enter your address</Form.Control.Feedback> */}
        </Form.Group>
      
        </Col>

          </Row>

          <Row >
          <Col md>

          <Form.Group  >
          <Form.Label className='mt-3'>Email</Form.Label>
             <Form.Control  required  type="email"  placeholder="name@example.com" name='mail'
               className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
             onChange={e=>setregisterName({...registerName,email:e.target.value})}
            // value={email}  onChange={(e) => setEmail(e.target.value)}
             />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          {/* <Form.Control.Feedback type="invalid">Please enter your email</Form.Control.Feedback> */}
         </Form.Group>

     </Col>
      <Col md>

       

         <Form.Group   >
<Form.Label className='pt-3'>Password</Form.Label>
   <Form.Control  required  type="password"  placeholder="password" name='password' 
     className={`form-control ${errors.password ? 'is-invalid' : ''}`}
   onChange={e=>setregisterName({...registerName,password:e.target.value})}
  // value={password} onChange={(e) => setPassword(e.target.value)}
  />
     {errors.password && <div className="invalid-feedback">{errors.password}</div>}
{/* <Form.Control.Feedback type="invalid">Please enter your phone number</Form.Control.Feedback> */}
</Form.Group>
         </Col>

</Row>

          <div className='text-center'>
            <Button className='mt-5' variant="outline-dark"  type='submit' style={{backgroundColor:'grey',color:'white'}} onClick={handleRegister}>REGISTER</Button>
          </div>
    
          <p className='mt-3 text-center fs-5' style={{color:'black',fontWeight:500}}>Already have an account ? <Link to={'/'} style={{color:'black'}}>Login here</Link> </p>

    </Form>
    </div>
    </section>
    )
    
}

export default Register