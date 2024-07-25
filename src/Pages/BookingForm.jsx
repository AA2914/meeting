import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { Button, Col, Form, InputGroup, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function BookingForm() {

  const [bookingname, setBookingName] = useState({
    name: '',
    companyname: '',
    checkin: '',
    checkout: '',
    phonenumber: ''
  })


  const navigate = useNavigate()

  const handleLogin = () => {
    if (bookingname.name && bookingname.companyname && bookingname.checkin && bookingname.checkout && bookingname.phonenumber) {
      axios.post('http://localhost:8000/Booking', bookingname)
        .then(response => console.log(response))
        .catch(error => console.error(error));
         navigate('/bookingsuccess')
    }
  }


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
      <div>

        <Form noValidate validated={validated} onSubmit={handleSubmit} style={{ border: '1px solid', backgroundColor: 'white', padding: '20px' }} name='bookingForm' >
          <h2 style={{ fontFamily: '"Gilda Display", serif' }} className='text-center text-dark'>Book Your Room</h2>
          <br />
          <Row>
            <Col>
              <Form.Control className='input' required type="text" placeholder="Name" defaultValue="" controlId="validationCustom01"
                onChange={e => setBookingName({ ...bookingname, name: e.target.value })}/>
               {/* value={name} onChange={(e) => setName(e.target.value)}   */}
              
              <Form.Control.Feedback type="invalid">Please enter your name.</Form.Control.Feedback>
            </Col>


            <Col>
              <Form.Control className='input' required type="text" placeholder="Company Name" defaultValue="" controlId="validationCustom02"
                onChange={e => setBookingName({ ...bookingname, companyname: e.target.value })} />
               {/* value={companyname} onChange={(e) => setCompanyname(e.target.value)}   */}

              <Form.Control.Feedback type="invalid">Please enter company name.</Form.Control.Feedback>
            </Col>

          </Row>
          <br />
          <Row>

            <Col>
              <InputGroup className="mb-3" >
                <InputGroup.Text id="basic-addon3" >
                  Check-In
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3"  required type='date' placeholder="Check In" defaultValue="" controlId="validationCustom03"
                  onChange={e => setBookingName({ ...bookingname, checkin: e.target.value })} />
                 {/* value={checkin} onChange={(e) => setCheckin(e.target.value)}   */}
                
                <Form.Control.Feedback type="invalid">Please enter date</Form.Control.Feedback>
              </InputGroup>

            </Col>

            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon3">
                  Check-Out
                </InputGroup.Text>
                <Form.Control id="basic-url" aria-describedby="basic-addon3"  required type='date' placeholder="Check Out" defaultValue="" controlId="validationCustom04"
                  onChange={e => setBookingName({ ...bookingname, checkout: e.target.value })} />
                 {/* value={checkout} onChange={(e) => setCheckout(e.target.value)}   */}

               <Form.Control.Feedback type="invalid">Please enter date</Form.Control.Feedback>
              </InputGroup>
            </Col>

          </Row>

          <Row>

            <Col>
              <Form.Control className='input' required type='text' placeholder="Phone Number" defaultValue="" controlId="validationCustom05"
                onChange={e => setBookingName({ ...bookingname, phonenumber: e.target.value })}  />
               {/* value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}   */}
              
               <Form.Control.Feedback type="invalid">Please enter date</Form.Control.Feedback>
            </Col>


          </Row>


          <div className='text-center mt-5 pb-4 '>
            <Button size="lg" type='submit' style={{ background: '#fd7792', border: '0px', fontSize: '18px', height: '50px', fontStyle: 'bold' }} onClick={handleLogin}>
              PROCEED
            </Button>{' '}
          </div>


        </Form>



        {/* <Form style={{ border: '1px solid' }} className='p-5' noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Control
                required
                type="text"
                placeholder="Name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="State" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom05">
              <Form.Label>Zip</Form.Label>
              <Form.Control type="text" placeholder="Zip" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button type="submit">Submit form</Button>
        </Form> */}

      </div>


    </div>

  )
}

export default BookingForm