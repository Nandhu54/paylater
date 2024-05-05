import { compareSync } from 'bcryptjs';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Student_Login()
{
let {register,handleSubmit,formState:{errors},}=useForm()
let navigate=useNavigate()
function onLoginFormSubmit(userCredential)
{
  fetch(`http://localhost:4000/users?username=${userCredential.username}`,{
    method:"GET"
  })
  .then((res)=>res.json())
  .then((userarray)=>{
    if(userarray.length===0)
    {
      alert("Invalid User")
    }
    else
    {
      let result=compareSync(userCredential.password,userarray[0].password)
      if(result===true)
      {
      navigate(`/student_home/${userCredential.username}`,{state:userarray[0]})
      }
      else{
        alert('Invalid password')
      }
    }
  })
  .catch((error)=>{
    console.log("Error in fetching user data",error)
  })
}


  return (
    <div className='d-block mx-auto w-50 bg-secondary p-4 mt-5' >
        <h1 className='display-2 text-warning text-center fw-bold'>Login</h1>
      <form onSubmit={handleSubmit(onLoginFormSubmit)}>
        <div className='mt-4 mb-3'>
        <label htmlFor="username" className='form-label'>
            Username
            </label>
        <input type='text' className='form-control' id='username' placeholder='enter username' {...register("username",{required:true})}></input>
        {
errors.username?.type==="required" && (<p className='text-warning'>Username is required</p>)
}

</div>
        
       <div className='mb-3'> 
        <label htmlFor="password" className='form-label'>
           Password
            </label>
        <input type='password' className='form-control' id='password' placeholder='enter password' {...register("password",{required:true})}></input>
        {
errors.password?.type==="required" && (<p className='text-warning'>Password is required</p>)
}
</div>
       <button className='btn btn-success'>Login</button>
       <p className='mt-3 mb-0 text-center fw-bold text-white'>New user?<Link to='/student_register'>Register</Link></p>
      </form>
    </div>
  )
}

export default Student_Login
