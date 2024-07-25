import React, { useState } from 'react'
import './Login.css';
import Form from 'react-bootstrap/Form';
import { Button, Row } from 'react-bootstrap';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');  
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
  
    const handleLogin = (event) => {
        event.preventDefault();
  
        let tempErrors = {};
        let isValid = true;
  
        if (!email) {
            tempErrors["email"] = "Email is required";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors["email"] = "Email is not valid";
            isValid = false;
        }
  
        if (!password) {
            tempErrors["password"] = "Password is required";
            isValid = false;
        }
  
        if (isValid) {
            axios.get('http://localhost:8000/register', {
                params: {
                    email: email,
                    password: password
                }
            })
            .then(response => {
                const user = response.data.find(user => user.email === email && user.password === password);
                if (user) {
                    console.log("Login successful");
                   
                    navigate(`/home`); // Change to the route you want to navigate to on success
                } else {
                    setErrors({ login: 'Invalid email or password' });
                }
            })
            .catch(err => {
                console.error(err);
                setErrors({ login: 'Invalid email or password' });
            });
        } else {
            setErrors(tempErrors);
        }
    };

  return (
<section id='login' style={{height:'100vh'}} className=" d-flex justify-content-center align-items-center">
    <div  >

<Form  
// noValidate validated={validated} onSubmit={handleSubmit}  
style={{border:'10px solid white',width:"400px",borderRadius:'10px',background:'none'}} className='ps-3 pe-3'>

<h1 className='text-center pt-3' style={{fontStyle:"italic",color:'white'}}> Login Page </h1>

      <Row >

        <Form.Group   controlId="validationCustom01">
          <Form.Label style={{color:'white',fontWeight:'700',fontSize:'20px'}}>Email</Form.Label>
             <Form.Control required  type="text" id='email'  placeholder="mail" name='mail' style={{backgroundColor:'#999999'}}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            //  onChange={e=>setloginName({...loginName,mail:e.target.value})}
            value={email} onChange={(e) => setEmail(e.target.value)}  
            />
             {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          {/* <Form.Control.Feedback type="invalid" style={{color:"black",fontSize:'18px',fontWeight:'bold'}}>Please enter your name</Form.Control.Feedback> */}
        </Form.Group>

        <Form.Group   controlId="validationCustom01">
          <Form.Label className='mt-3' style={{color:'white',fontWeight:'700',fontSize:'20px'}}>Password</Form.Label>
             <Form.Control required  type="password"  placeholder="password" name='password'  style={{backgroundColor:'#999999'}}
             className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            //  onChange={e=>setloginName({...loginName,password:e.target.value})}
            value={password}  onChange={(e) => setPassword(e.target.value)}  
             />
              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
               {errors.login && <div className="text-danger">{errors.login}</div>}

          {/* <Form.Control.Feedback type="invalid" style={{color:"black",fontSize:'18px',fontWeight:'bold'}}>Please enter  password</Form.Control.Feedback> */}
        </Form.Group>
       
      </Row>

      <div className='text-center'>
      <Button className='mt-4' type='submit' style={{backgroundColor:'lightgrey',color:'black',padding:'10px 50px 10px 50px'}} onClick={handleLogin}> LOGIN </Button> 
      </div>

      <p className='mt-3 text-center fs-5' style={{color:'white'}} >Do not have account ? <Link to={'/register'}  style={{color:'black'}}>Register</Link> </p>

      
    </Form>

</div>
</section>

    )
}

export default Login