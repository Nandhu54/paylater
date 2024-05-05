import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function CampusEvent_Home() 
{
  let [counter,Setcounter]=useState(0);
  function Update(reff)
  {
    Setcounter((prevCounter) => prevCounter + reff);
  }

  let {register,handleSubmit, formState: { errors }, }=useForm();


  function handleFormSubmit(formData) {
    const { amt,textarea } = formData;
  
   
    const parsedAmt = parseFloat(amt);
  
    if (!isNaN(parsedAmt)) {
      Setcounter((prevCounter) => prevCounter + parsedAmt);
    } else {
      console.error('Invalid amount entered');
    }
  }



  return (
    <div>
      <div><img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" className="w-25 h-25 mx-auto m-3"></img></div>
      <h1 className='fs-2 fw-bold text-center text-success'>Welcome to Campus Events</h1>
      <div className='text-end fs-3 fw-bold '>PayLater Amount:<span className='border '></span>{counter}</div>

      <h1 className='fs-4 fw-bold text-center text-info mt-3'>Upcoming Events</h1>
      
      <div className="w-60 shadow-lg p-4 mb-5 bg-body rounded mx-auto">
          <div className='container'>
            <table className='table border'>
              <thead className='text-center'>
                <th>Sno</th>
                <th>Events</th>
                <th>Date</th>
                <th>Time</th>
                <th>Pass price</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Hackhathon</td>
                  <td>19-Dec-2023</td>
                  <td>10 am - 4pm</td>
                  <td>500 </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Convergence</td>
                  <td>20-Dec-2023</td>
                  <td>9 am - 3pm</td>
                  <td>799</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Github workshop</td>
                  <td>21-Dec-2023</td>
                  <td>11 am - 4pm</td>
                  <td>399 </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Smart interviews</td>
                  <td>22-Dec-2023</td>
                  <td>10 am - 4pm</td>
                  <td>1000</td>
                </tr>
              </tbody>
            </table>
</div>
        </div>
        <div className='w-50 mx-auto'>
          <form className='' onSubmit={handleSubmit(handleFormSubmit)}>
<div>
<label htmlFor='amt' className='form-label fs-4 fw-bold text-warning'>Enter Intrested Events</label>
<div class="form-group">
    
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" {...register('textarea')}></textarea>
   <button className='btn btn-success mt-3 mb-2'>Add</button>
  </div>
</div>


            <label htmlFor='amt' className='form-label fs-3 fw-bold'>Enter Amount</label>
            <input type='number' className='form-control ' {...register('amt')}></input>
            <button className='btn btn-info mt-2' onClick={() => Update(0)}>PayLater</button>
          </form>
          </div>
    </div>
  )
}

export default CampusEvent_Home
