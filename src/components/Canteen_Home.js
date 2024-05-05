import React from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form';

function Canteen_Home()
 {
  let [counter,Setcounter]=useState(0);
  function Update(reff)
  {
    Setcounter((prevCounter) => prevCounter + reff);
  }

  let {register,handleSubmit, formState: { errors }, }=useForm();


  function handleFormSubmit(formData) {
    const { amt } = formData;
  
   
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
      <h1 className='fs-2 fw-bold text-center text-success'>Welcome to Cateen</h1>
      <div className='text-end fs-3 fw-bold '>PayLater Amount:<span className='border '>{counter}</span></div>

      <h1 className='fs-4 fw-bold text-center text-info mt-3'>Food Items</h1>
      
      <div className="w-50 shadow-lg p-4 mb-5 bg-body rounded mx-auto">
          <div className='container'>
            <table className='table border'>
              <thead>
                <th>Sno</th>
                <th>Items</th>
                <th>price</th>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Meals</td>
                  <td>50 </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Parota</td>
                  <td>40</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Biryani</td>
                  <td>100 </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Tea</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
</div>
        </div>
        <div className='w-50 mx-auto'>
          <form className='' onSubmit={handleSubmit(handleFormSubmit)}>
            <label htmlFor='amt' className='form-label fs-3 fw-bold'>Enter Amount</label>
            <input type='number' className='form-control ' {...register('amt')}></input>
            <button className='btn btn-info mt-2' onClick={() => Update(0)}>PayLater</button>
          </form>
        </div>
    </div>
  )
}

export default Canteen_Home
