import { useForm } from "react-hook-form";
import {useState} from 'react'
import { Link, Outlet, useNavigate } from "react-router-dom";

function Canteen_admin() {

  //users state
  let [users,setUsers]=useState([])

  //let navigate=useNavigate();

  //function navigateToActiveUsers() {
  //  navigate("get_active_users");  // Replace "/active_users" with the actual path of your active users component
 // }

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //handle form submit
  function handleFormSubmit(userObj) {
    setUsers([...users,userObj])
  }

  //delete a user
  function deleteUser(index){
    let copyUsers=[...users]
    copyUsers.splice(index,1)
    setUsers(copyUsers)
  }

  //console.log(errors)

  return (
    <div>
      <div><img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" className="w-25 h-25 mx-auto m-3"></img></div>
    <Link  className="nav-link" to='/get_active_users'>  <div className="text-end"><button className="btn btn-success" >Get Active Users</button></div></Link>
      <h1 className="fs-3 text-center mt-2 fw-bold mb-5 ">Campus Event Admin Page</h1>
    <div className="row">
      <div className="col-sm-4">
      <h1 className="fs-3 text-center text-warning">
       Add Events
      </h1>
      <form
        className="w-100 mx-auto mt- border p-4 bg-light"
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        {/* username */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Event name
          </label>
          <input
            type="text"
            id="username"
            className="form-control"
            {...register("item", {
              required: true,
            })}
          />
          {/* validation error message of username */}
          {errors.username?.type === "required" && (
            <p className="text-danger">Username is required</p>
          )}
          
          
        
        </div>

        <div className="mb-3">
          <label htmlFor="username" className="form-label">
           Event date
          </label>
          <input
            type="date"
            id="username"
            className="form-control"
            {...register("date", {
              required: true,
            })}
          />
          {/* validation error message of username */}
          {errors.date?.type === "required" && (
            <p className="text-danger">Username is required</p>
          )}
          
        </div>
        
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
           Price
          </label>
          <input
            type="number"
            id="username"
            className="form-control"
            {...register("price", {
              required: true,
            })}
          />
          {/* validation error message of username */}
          {errors.username?.type === "required" && (
            <p className="text-danger">Username is required</p>
          )}
          
        </div>
       
        
        <button className="btn btn-success">Add</button>
      </form>
      </div>

        <div className="col-sm-8">
      {/* table of users */}
      <h1 className="fs-3 text-center text-info mt-">List of Fooditems</h1>
      <table className="table text-center table-warning">
        <thead>
          <tr>
            <th>Sno</th>
            <th>Event name</th>
            <th>Date of event</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user,index)=><tr key={index}>
              <td>{index+1}</td>
              <td>{user.item}</td>
              <td>{user.date}</td>
              <td>{user.price}</td>
              
            </tr>)
          }
        </tbody>
      </table>
      </div>
    </div>
    <Outlet/>
    </div>
  );
}

export default Canteen_admin