import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Contact from './Contact'
import Footer from './Footer'
import Navbar1 from './Navbar1'

function Suites() {
  return (
    <>

   <Navbar1/>

      <h1 className='text-center pt-5 pb-4 text-dark' style={{ fontFamily: '"Gilda Display", serif' }}>Suites & Rooms</h1>

      <Row xs={1} md={2} className="g-0 text-center pb-5" >
        <Col >
          <Card style={{ border:'1px solid' }}>

                    <div  >
                      <picture>
                        <img data-src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-room-with-city-views-34568:Wide-Hor?wid=1336&amp;fit=constrain" class="img lazy w-100 entered loaded exited" alt="King Room with City Views" src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-room-with-city-views-34568:Wide-Hor?wid=1336&amp;fit=constrain" data-ll-status="loaded" />
                      </picture>
                    </div>

                    <div  class="marriott-room-card-text d-flex flex-column justify-content-between px-0 px-xl-4">
                      <h3 className='pt-3' style={{fontSize:'35px'}}>Deluxe</h3>
                      <p style={{fontSize:'20px'}}>Guest room, 1 King</p>
                      <div  className='pt-4 pb-4'>
                        <Link to={'/viewroom1'}><Button style={{backgroundColor:'grey',border:'0'}}>View Room</Button></Link>
                      </div>
                    </div>
                                        
          </Card>
        </Col>

    
        <Col >
          <Card style={{ border:'1px solid' }}>

                    <div  >
                      <picture>
                        <img data-src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-room-with-city-views-24175:Wide-Hor?wid=1336&amp;fit=constrain" class="img lazy w-100 entered loaded" alt="King Room with City Views" src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-room-with-city-views-24175:Wide-Hor?wid=1336&amp;fit=constrain" data-ll-status="loaded" />
                      </picture>
                    </div>

                    <div  class="marriott-room-card-text d-flex flex-column justify-content-between px-0 px-xl-4">
                      <h3 className='pt-3' style={{fontSize:'35px'}}>Accessible Room</h3>
                      <p style={{fontSize:'20px'}}>Accessible Guest room, King, City view, Near elevator, Roll-in Shower</p>
                      <div  className='pt-4 pb-4'>
                        <Link to={'/viewroom2'}><Button style={{backgroundColor:'grey',border:'0'}}>View Room</Button></Link>
                      </div>
                    </div>
                                        
          </Card>
        </Col>

      </Row>

      <Row xs={1} md={2} className="g-0 text-center pb-5">


        <Col>
          <Card style={{ border:'1px solid' }}>

                    <div  >
                      <picture>
                        <img data-src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-room-with-city-views-34568:Wide-Hor?wid=1336&amp;fit=constrain" class="img lazy w-100 entered loaded exited" alt="King Room with City Views" src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-room-with-city-views-34568:Wide-Hor?wid=1336&amp;fit=constrain" data-ll-status="loaded" />
                      </picture>
                    </div>

                    <div  class="marriott-room-card-text d-flex flex-column justify-content-between px-0 px-xl-4">
                      <h3 className='pt-3' style={{fontSize:'35px'}}>Premier</h3>
                      <p style={{fontSize:'20px'}}>Guest room, 1 King</p>
                      <div  className='pt-4 pb-4'>
                        <Link to={'/viewroom3'}><Button style={{backgroundColor:'grey',border:'0'}}>View Room</Button></Link>
                      </div>
                    </div>
                                        
          </Card>
        </Col>


        <Col>
          <Card style={{ border:'1px solid' }}>

                    <div  >
                      <picture>
                        <img data-src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-view-12592:Wide-Hor?wid=1336&amp;fit=constrain" class="img lazy w-100 entered loaded" alt="Victoria Harbour King" src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-king-view-12592:Wide-Hor?wid=1336&amp;fit=constrain" data-ll-status="loaded" />
                      </picture>
                    </div>

                    <div  class="marriott-room-card-text d-flex flex-column justify-content-between px-0 px-xl-4">
                      <h3 className='pt-3' style={{fontSize:'35px'}}>Victoria Harbour View</h3>
                      <p style={{fontSize:'20px'}}>Guest room, 1 King</p>
                      <div  className='pt-4 pb-4'>
                        <Link to={'/viewroom4'}><Button style={{backgroundColor:'grey',border:'0'}}>View Room</Button></Link>
                      </div>
                    </div>
                                        
          </Card>
        </Col>


      </Row>


      <Row xs={1} md={2} className="g-0 text-center pb-5">

        <Col>
          <Card style={{ border:'1px solid' }}>

                    <div  >
                      <picture>
                        <img data-src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-executive-suite--39445:Wide-Hor?wid=1336&amp;fit=constrain" class="img lazy w-100 entered loaded" alt="Living and Dining Room with bay views" src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-executive-suite--39445:Wide-Hor?wid=1336&amp;fit=constrain" data-ll-status="loaded" />
                      </picture>
                    </div>

                    <div  class="marriott-room-card-text d-flex flex-column justify-content-between px-0 px-xl-4">
                      <h3 className='pt-3' style={{fontSize:'35px'}}>Executive</h3>
                      <p style={{fontSize:'20px'}}>Club lounge access, 1 Bedroom Suite, 1 King</p>
                      <div  className='pt-4 pb-4'>
                        <Link to={'/viewroom5'}><Button style={{backgroundColor:'grey',border:'0'}}>View Room</Button></Link>
                      </div>
                    </div>
                                        
          </Card>
        </Col>


        <Col>
          <Card style={{ border:'1px solid' }}>

                    <div  >
                      <picture>
                        <img data-src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-dining-area-39297:Wide-Hor?wid=1336&amp;fit=constrain" class="img lazy w-100 entered loaded" alt="Yarra Suite - dining " src="https://cache.marriott.com/is/image/marriotts7prod/rz-melrz-dining-area-39297:Wide-Hor?wid=1336&amp;fit=constrain" data-ll-status="loaded" />
                      </picture>
                    </div>

                    <div  class="marriott-room-card-text d-flex flex-column justify-content-between px-0 px-xl-4">
                      <h3 className='pt-3' style={{fontSize:'35px'}}>Yarra</h3>
                      <p style={{fontSize:'20px'}}>Club lounge access, 1 Bedroom Suite, 1 King</p>
                      <div  className='pt-4 pb-4'>
                        <Link to={'/viewroom6'}><Button style={{backgroundColor:'grey',border:'0'}}>View Room</Button></Link>
                      </div>
                    </div>
                                        
          </Card>
        </Col>

      </Row>

   <Contact/>
  <Footer/>
    </>
  )
}

export default Suites