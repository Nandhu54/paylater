import React from 'react'
import pic from '../images/vnr002.jpeg'
import pic1 from '../images/student.jpeg'
import pic2 from '../images/staff.jpeg'
import { Link } from 'react-router-dom';

function Home() {
    const backgroundStyle = {
        backgroundImage: `url("${pic}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };


  return (
    <div style={backgroundStyle}>
    
    <h1 className='display-2 text-center text-wrap fw-bolder '>Welcome to VNR VJIET</h1>
    <h1 className='display-3 mt-5 text-center text-wrap fw-bolder '>PayLater</h1>
    <div className='row mt-5'>
      <div className='col-3'>

      </div>
     <div className='col-3 text-center fw-bolder fs-4'>
  <Link className='nav-link' to='/student_log_reg'> <button className='btn'>  <img src={pic1} alt='' className='w-50 photo'></img>
     
     </button>
     </Link>
       Student
     </div>
     <div className='col-3 text-center fw-bolder fs-4'>
  <Link className='nav-link' to='admin_register'> <button className='btn' >  <img src={pic2} alt='' className='w-50 photo'></img>
     
     </button>
     </Link>
     Admin
     </div>
     <div className='col-3'>

      </div>
    </div>
    </div>
  )
}

export default Home
