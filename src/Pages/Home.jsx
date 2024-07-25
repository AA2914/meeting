import React  from 'react'
import Navbar1 from './Navbar1'
import Contact from './Contact'
import Footer from './Footer'

function Home() {

 

  return (
    <>
 <Navbar1/>

<section>

 <div>
   <img src="https://www.traveltrendstoday.in/wp-content/uploads/2024/04/Hyatt-Centric.jpg" alt="" style={{width:'100%',height:'100vh'}} />
    {/* <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/447144635.jpg?k=100be89bd86dcd0a7b7b56935134dcbb4c8c4a672bcda144e7553fd831aa1bdb&o=&hp=1" alt="" style={{width:'100%',height:'82vh'}} /> */}
 </div>

</section>
 

<section >
{/* <div style={{border:'1px solid yellow'}} class=""> */}
   
<div   class=" d-flex justify-content-center align-items-center container  pt-5 " >
    <div  class="text-center">
        
        <h1 style={{fontSize:'55px',fontFamily:'Italianno, cursive',color:'black'}} >Welcome to The Ritz-Carlton, Melbourne</h1>
        <h2 style={{fontSize:'60px',fontFamily:'Times New Roman, serif',letterSpacing:'3px'}} class="t-display-s pb-3 mb-0  mt-xl-3  t-title-m  ">A SKY-HIGH LUXURY RETREAT</h2>
        
            <div></div>
        

        <p style={{fontSize:'20px',fontFamily:'Times New Roman,serif'}} class=" pt-xl-1 pb-3 ">
            Rising 80 stories above the city, The Ritz Carlton Melbourne offers panoramic views of the Dandenong Ranges, Victoria Harbour and Port Phillip Bay. Celebrating Australia's ancient stories and vibrant cultures, Melbourne's newest leading luxury hotel features the awarded Atria restaurant, The Ritz Carlton Club and immersive spa and wellness facilities. 
        </p>

        
      
<div >
        <div  class="row justify-content-center pb-3">
            <div  class="col-11 col-xl-10">
                <h2 class="mb-3 " style={{fontFamily:'sans-serif'}}>Upgrade Your Stay</h2>
                <div style={{fontSize:'20px',fontFamily:'Times New Roman,serif'}}>The Ritz-Carlton Club redefines luxury with personalised concierge service, inclusive drinks and dining, and a private Club lounge to escape to throughout the day. Subject to availability.</div>
            </div>
        </div>
    </div>
</div>
</div>

</section>



<section >
<div style={{padding:'0px 70px 0px 70px'}}>
    <div  className='text-center mt-5 mb-5 '>
        
    
        <h1 style={{fontSize:'55px',fontFamily:'Italianno, cursive'}} className='text-center text-dark mb-1'>Inspiring Meeting and Event Spaces in Melbourne CBD</h1>
        <h2 style={{fontSize:'60px',fontFamily:'Times New Roman, serif',letterSpacing:'3px'}} className='text-center'>MEETINGS</h2>
                
        <p style={{fontSize:'20px',fontFamily:'Times New Roman,serif'}} className='text-center mt-3 '>
            Experience legendary service and world-class facilities across 2,781sqm of inspired meeting and event spaces in Melbourne's CBD at The Ritz-Carlton, Melbourne. Discover versatile event venues spanning two levels of the hotel, including The Ritz-Carlton Grand Ballroom, featuring 7m high ceilings, 12 chandeliers and an impressive floor-to-ceiling feature-window inspired by the Great Hall of Melbourne’s National Gallery of Victoria.
        </p>
       
    </div>
   </div>

      
    
   <div style={{padding:'30px',backgroundColor:'  rgb(245, 238, 229)'}}  className='pb-5'>
      <div  class="d-flex flex-column container">
         
         <div  class=" row d-flex flex-column flex-xl-row justify-content-center px-3 px-xl-0">
            <div  class=" d-flex flex-column align-items-center col-12 col-xl-3 px-0">
               <h3 style={{fontFamily:'Times New Roman, serif'}} class="text-center pt-4 pb-2 ">
                  10
               </h3>
               <div style={{fontFamily:'Times New Roman, serif',fontSize:'23px'}} class="text-center">
                  Event Rooms
               </div>
            </div>
         
            <div  class=" d-flex flex-column align-items-center col-12 col-xl-3">
               <h3 style={{fontFamily:'Times New Roman, serif'}} class="text-center pt-4 pb-2 ">
                  1300 SQ MT
               </h3>
               <div style={{fontFamily:'Times New Roman, serif',fontSize:'23px'}} class="text-center">
                  Total Event Space
               </div>
            </div>
         
            <div  class="d-flex flex-column align-items-center col-12 col-xl-3 ">
               <h3 style={{fontFamily:'Times New Roman, serif'}} class="text-center pt-4 pb-2">
                  958
               </h3>
               <div style={{fontFamily:'Times New Roman, serif',fontSize:'23px'}} class="text-center">
                  Capacity Largest Space
               </div>
            </div>
         
            <div  class="d-flex flex-column align-items-center col-12 col-xl-3">
               <h3 style={{fontFamily:'Times New Roman, serif'}} class="text-center pt-4 pb-2">
                  7
               </h3>
               <div style={{fontFamily:'Times New Roman, serif',fontSize:'23px'}} class="text-center">
                  Breakout Rooms
               </div>
               
            </div>
         </div>
        
      </div>
   </div>

      
</section>

<Contact/>
<Footer/>


    </>
  )
}

export default Home