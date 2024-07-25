import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar1 from './Pages/Navbar1';
import { Route, Routes } from 'react-router-dom';
import Gallary from './Pages/Gallary';
import Suites from './Pages/Suites';
import Footer from './Pages/Footer';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Adminlogin from './Pages/Adminlogin';
import Cards from './Pages/Cards';
import UserRegister from './Pages/UserRegister';
import UserBooking from './Pages/UserBooking';
import UserContact from './Pages/UserContact';
import Admin from './Pages/Admin';
import Viewroom1 from './Pages/Viewroom1';
import Viewroom2 from './Pages/Viewroom2';
import Viewroom3 from './Pages/Viewroom3';
import Viewroom4 from './Pages/Viewroom4';
import Viewroom5 from './Pages/Viewroom5';
import Viewroom6 from './Pages/Viewroom6';

import BookingForm from './Pages/BookingForm';
import BookingSuccess from './Pages/BookingSuccess';

function App() {
  return (
   <>

   <Routes>
  <Route path='/' element={<Login/>}/>
  <Route path='register' element={<Register/>}/>
  <Route path='adminlogin' element={<Adminlogin/>}/>
  
  <Route path='card' element={<Cards/>}/>
  <Route path='userRegister' element={<UserRegister/>}/>
  <Route path='userBooking' element={<UserBooking/>}/>
  <Route path='userContact' element={<UserContact/>}/>

  <Route path='admin' element={<Admin/>}/>
  <Route path='navbar' element={<Navbar1/>}/>
  <Route path='home' element={<Home/>}/>
  <Route path='gallary' element={<Gallary/>}/>
  <Route path='suites' element={<Suites/>}/>
  <Route path='footer' element={<Footer/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='viewroom1' element={<Viewroom1/>}/>
  <Route path='viewroom2' element={<Viewroom2/>}/>
  <Route path='viewroom3' element={<Viewroom3/>}/>
  <Route path='viewroom4' element={<Viewroom4/>}/>
  <Route path='viewroom5' element={<Viewroom5/>}/>
  <Route path='viewroom6' element={<Viewroom6/>}/>
  <Route path='bookingform' element={<BookingForm/>}/>
  <Route path='bookingsuccess' element={<BookingSuccess/>}/>

   </Routes>
   
   </>
  );
}

export default App;
