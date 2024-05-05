import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import pic1 from '../images/canteen_pic_001.png'
import pic2 from '../images/stationary_00.jpeg'
import pic3 from '../images/Campu_event_00.png'


function Admin_Reg() {
  return (
    <div>
      <div><img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" className="w-25 h-25 mx-auto m-3"></img></div>
      <h1 className='fs-2 fw-bold text-center'>Admin Page</h1>
     <ul className='nav justify-content-center mt-5'>
    <li className='nav-item'>
    <Link className='nav-link' to='canteen_login'> <button className='btn border fw-bold'>  <img src={pic1} alt=''  className='w-50 photo rounded-5'></img>
    <br></br> Canteen Login
     </button>
     </Link>
    </li>
    <li className='nav-item'>
    <Link className='nav-link' to='stationary_login'> <button className='btn border fw-bold'>  <img src={pic2} alt=''  className='w-50 photo rounded-5'></img>
    <br></br> Stationary Login
     </button>
     </Link>
    </li>
    <li className='nav-item'>
    <Link className='nav-link' to='campusevent_login'> <button className='btn border fw-bold '>  <img src={pic3} alt=''  className='w-50 photo rounded-5'></img>
    <br></br>Campus Event Login
     </button>
     </Link>
    </li>
     </ul>
     <Outlet/>
    </div>
  )
}

export default Admin_Reg
