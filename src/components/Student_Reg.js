
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { hashSync } from 'bcryptjs'
import { useState } from 'react'

function Student_Reg() 
{

let {register,handleSubmit,formState:{errors},}=useForm()
let navigate=useNavigate()

const [file, setFile] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


function OnRegisterFormSubmit(newUser)
{
let hashedPassword=hashSync(newUser.password,5)
newUser.password=hashedPassword;
fetch('http://localhost:4000/users',{
  method:'POST',
  headers:{"Content-Type":"application/json"},
  body:JSON.stringify(newUser)
})
.then(res=>{
  if(res.status===201)
  {
navigate('/student_login')
  }
}
  )
.catch(err=>console.log("err in registration ",err))
}




  return (
    <div className='d-block mx-auto w-50 bg-secondary p-4 mt-4 mb-3' >
        <h1 className='display-3 text-info fw-bold text-center fw-bold'>Registration</h1>
      <form onSubmit={handleSubmit(OnRegisterFormSubmit)}>
    
     
      <div className=' mb-3'>
        <label htmlFor="name" className='form-label'>
           Name
            </label>
        <input type='text' className='form-control' id='name' placeholder='enter name...' {...register("name",{required:true})}></input>

      {
errors.name?.type==="required" && (<p className='text-warning'>Email is required</p>)
}
</div>

<div className=' mb-3'>
        <label htmlFor="roll" className='form-label'>
           Roll No
            </label>
        <input type='text' className='form-control' id='roll' placeholder='enter roll number...' {...register("RollNo",{required:true})}></input>

      {
errors.RollNo?.type==="required" && (<p className='text-warning'>Roll no is required</p>)
}
</div>
<div className=' mb-3'>
        <label htmlFor="roll" className='form-label'>
           Branch & Sec
            </label>
        <input type='text' className='form-control' id='roll' placeholder='enter branch-section...' {...register("branch",{required:true})}></input>

      {
errors.branch?.type==="required" && (<p className='text-warning'>Branch is required</p>)
}
</div>
<div className=' mb-3'>
        <label htmlFor="mob" className='form-label'>
          Student Mobile Number:
            </label>
        <input type='number' className='form-control' id='mob' placeholder='enter your mobile number...' {...register("StudentNumber",{required:true})}></input>

      {
errors.StudentNumber?.type==="required" && (<p className='text-warning'>Mobile is required</p>)
}
</div>

<div className=' mb-3'>
        <label htmlFor="img" className='form-label'>
          Choose your photo
            </label>
            <input type="file" onChange={handleChange} id='img' className='form-control' {...register('img')}/>
            <img src={file} />
</div>

<div className=' mb-3'>
<label>
      select your monthly limit:
      <select name="selectedLimit">
      <option value="choose" >choose</option>
        <option value="1000" {...register('Limit')}>1000</option>
        <option value="2000" {...register('Limit')}>2000</option>
        <option value="3000" {...register('Limit')}>3000</option>
        <option value="above 3000" {...register('Limit')}>Above 3000</option>
      </select>
    </label> 
</div>



<div className=' mb-3'>
        <label htmlFor="Fname" className='form-label'>
          Father name
            </label>
        <input type='text' className='form-control' id='Fname' placeholder='enter your father name' {...register("fatherName",{required:true})}></input>

      {
errors.fatherName?.type==="required" && (<p className='text-warning'>Email is required</p>)
}
</div>

<div className=' mb-3'>
        <label htmlFor="mob" className='form-label'>
          Father Mobile Number:
            </label>
        <input type='number' className='form-control' id='mob' placeholder='enter your mobile number...' {...register("FatherNumber",{required:true})}></input>

      {
errors.FatherNumber?.type==="required" && (<p className='text-warning'>Email is required</p>)
}
</div>


        <div className='mt-4 mb-3'>
        <label htmlFor="username" className='form-label'>
            Username
            </label>
        <input type='text' className='form-control' id='username' placeholder='enter new username' {...register("username",{required:true,minLength:5,maxLength:12})}></input>
{
errors.username?.type==="required" && (<p className='text-warning'>Username is required</p>)
}
{
errors.username?.type==="minLength" && (<p className='text-warning'>minimum length of username is 5</p>)
}
{
errors.username?.type==="maxLength" && (<p className='text-warning'>maximum length of username is 12</p>)
}

</div>


<div className=' mb-3'>
        <label htmlFor="dob" className='form-label'>
           Date Of Birth
            </label>
        <input type='date' className='form-control' id='dob' placeholder='enter new username' {...register("DOB",{required:true})}></input>
        {
errors.DOB?.type==="required" && (<p className='text-warning'>Date Of Birth is required</p>)
}
</div>

<div className=' mb-3'>
        <label htmlFor="mail" className='form-label'>
            Email
            </label>
        <input type='email' className='form-control' id='mail' placeholder='enter email id' {...register("email",{required:true})}></input>

      {
errors.email?.type==="required" && (<p className='text-warning'>Email is required</p>)
}
</div>
        
       <div className='mb-3'> 
        <label htmlFor="passwor" className='form-label'>
           Password
            </label>
        <input type='password' className='form-control' id='passwor' placeholder='enter new password' {...register("password",{required:true})}></input>
        {
errors.password?.type==="required" && (<p className='text-warning'>Password is required</p>)
}
</div>

       <button className='btn btn-success '>Register</button>
        <p className='mt-3 mb-0 text-center fw-bold text-white'>Already Registered?<Link to='/student_login'>Login</Link></p>
      </form>
    </div>
  )
}

export default Student_Reg
