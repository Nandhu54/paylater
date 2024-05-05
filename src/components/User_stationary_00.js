/**
 * The `User_stationary` function is a React component that displays a list of available items and
 * allows the user to enter an amount to pay later.
 * @returns The function `User_stationary` is returning a JSX element.
 */
import React from 'react'
import {useForm } from 'react-hook-form';
import { useState } from 'react';

function User_stationary()
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
        <h1 className='fs-2 fw-bold text-center text-success'>Welcome to Stationary</h1>
        <div className='text-end fs-3 fw-bold '>PayLater Amount:{counter}</div>
        <div className='mx-auto text-center'><h2 className='text-primary  m-4'>Availabe Things</h2></div>
        <div className="w-50 shadow-lg p-3 mb-5 bg-body rounded mx-auto">
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
                  <td>Xerox</td>
                  <td>2 </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Print</td>
                  <td>3 </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Record pad</td>
                  <td>40 </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>pen</td>
                  <td>5</td>
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


export default User_stationary
