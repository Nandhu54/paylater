import React from 'react'
import { Link,Outlet } from 'react-router-dom'
import pic1 from '..//images/New_registration.jpeg'
import pic2 from '../images/Student_Login.jpeg'

function Student_log_reg_() {
  return (
    <div>
      <div><img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" className="w-25 h-25 mx-auto m-3"></img></div>
      <h1 className='fs-2 fw-bold text-center'>Student Page</h1>
     <ul className='nav justify-content-center mt-5'>
    <li className='nav-item'>
    <Link className='nav-link' to='/student_register'> <button className='btn border fw-bold'>  <img src={pic1} alt=''  className='w-50 photo rounded-5'></img>
    <br></br> New Registration
     </button>
     </Link>
    </li>
    <li className='nav-item'>
    <Link className='nav-link' to='/student_login'> <button className='btn border fw-bold'>  <img src={pic2} alt=''  className='w-50 photo rounded-5'></img>
    <br></br> Login
     </button>
     </Link>
    </li>
   
     </ul>
     <Outlet/>
    </div>
  )
}

export default Student_log_reg_
