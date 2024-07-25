import React  from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
    
      <div>

<footer className="text-white text-center text-lg-start bg-dark">
{/* <!-- Grid container --> */}
<div className="container p-4">
  {/* Grid row */}
  <div className="row mt-4">
    {/* <!--Grid column--> */}
    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
      <h5 className="text-uppercase mb-4">About The Ritz-Carlton, Melbourne</h5>

      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
        voluptatum deleniti atque corrupti.
      </p>

      <p>
        Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
        molestias.
      </p>

     
    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">
      

      <ul className="fa-ul" style={{marginLeft:'1.65em'}}>
        <li className="mb-3">
         <Link to="/home">Overview</Link>
        </li>

        <li className="mb-3">
        <Link to="/gallary">Gallery</Link>
        </li>

        <li className="mb-3">
        <Link to="/contact">Contact</Link>
        </li>

        <li className="mb-3">
        <Link to="https://www.google.com/maps/place/37%C2%B048'50.5%22S+144%C2%B057'11.2%22E/@-37.8140263,144.9530959,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-37.8140263!4d144.9530959?hl=en&entry=ttu">View Map</Link>

        </li>

        <li className="mb-3">
        <a href=""><span className="ms-2">The Ritz-Carlton, Melbourne@gmail.com</span></a>
        </li>

        <li className="mb-3">
         <span className="ms-2">+ 48 234 567 88</span>
        </li>
      </ul>
    </div>
    {/* <!--Grid column--> */}

    {/* <!--Grid column--> */}
    <div className="col-lg-4 col-md-6 mb-4 mb-md-0 ">

            <h5 class="text-uppercase text-center mb-4">Opening hours</h5>
  
            <table class="table text-center text-white">
              <tbody class="fw-normal">
                <tr>
                  <td>Mon - Thu:</td>
                  <td>8am - 9pm</td>
                </tr>
                <tr>
                  <td>Fri - Sat:</td>
                  <td>8am - 1am</td>
                </tr>
                <tr>
                  <td>Sunday:</td>
                  <td>9am - 10pm</td>
                </tr>
              </tbody>
            </table>
          
    
    </div>
    {/* <!--Grid column--> */}
  </div>
  {/* <!--Grid row--> */}
</div>
{/* <!-- Grid container --> */}

{/* <!-- Copyright --> */}
<div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
  © 2020 Copyright:
  <span className="text-white" >The Ritz-Carlton, Melbourne</span>
</div>
{/* <!-- Copyright --> */}
</footer>

</div>
{/* <!-- End of .container --> */}

  </div>
  )
}

export default Footer