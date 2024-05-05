import React from 'react'
import { Link } from 'react-router-dom'
import pic from '../images/back_00.jpg'
import pic1 from '../images/canteen_pic_001.png'
import pic2 from '../images/stationary_00.jpeg'
import pic3 from '../images/Campu_event_00.png'
import { useLocation } from 'react-router-dom'
function Student_Home_00() {
  let {state}=useLocation()

  const backgroundStyle = {
    backgroundImage: `url("${pic}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle} className='mt-0'>
     <div className=' '>
     <p className=' lead fs-1 fw-bold text-end mt-4 text-'>Welcome, <span className='text-success'>{state.username}</span></p>
     <p className=' lead fs-4 fw-bold text-end '><span className='text-info'>{state.email}</span></p>
     <p className=' lead fs-4 fw-bold text-end text-white'>My Wallet: <span className='border'>{state.Limit}/-</span></p>
     <div className='row gx-5'>
      <h1 className='display-3 text-center text-warning fw-bold p-3'>Services</h1>
      <div className='col-4 text-center fw-bolder fs-4 shadow border'>
        <div className='p-3'>
  <Link className='nav-link' to='/canteen_home'> <button className='btn'>  <img src={pic1} alt=''  className='w-100 photo rounded-5'></img>
     
     </button>
     </Link>
     </div>
     </div>
     <div className='col-4 text-center fw-bolder fs-4 shadow border'>
  
  <div className='p-3'>
  <Link className='nav-link' to='/stationary_home'> <button className='btn'>  <img src={pic2} alt=''  className='w-100 photo rounded-5'></img>
     
     </button>
     </Link>
     </div>
     </div>
     <div className='col-4 text-center fw-bolder fs-4 shadow border'>
  <div className='p-3'>
  <Link className='nav-link' to='/campus_event_home'> <button className='btn'>  <img src={pic3} alt=''  className='w-100 photo rounded-5'></img>
     
     </button>
     </Link>
     </div>
       
     </div>
     </div>
    </div>
    </div>
  )
}

export default Student_Home_00
