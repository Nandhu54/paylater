import React from 'react'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home_00 from './components/Home'
import ContactUs from './components/ContactUs'
import Student_Reg from './components/Student_Reg'
import Student_Home_00 from './components/Student_Home_00'
import CampusEvent_Home from './components/CampusEvent_Home'
import Canteen_Home from './components/Canteen_Home'
import Admin_Reg from './components/Admin_Reg'
import Canteen_Admin from './components/Canteen_Admin'
import Stationary_Admin from './components/Stationary_Admin'
import Campus_Event from './components/Campusevent_admin'
import Student_Login from './components/Student_Login'
import User_stationary_00 from './components/User_stationary_00'
import Canteen_login from './components/Canteen_login'
import Stationary_login from './components/Stationary_login'
import Campusevent_login from './components/Campusevent_login'
import Get_active_users from './components/Get_active_users'
import Student_log_reg_ from './components/Student_log_reg_'
function App() 
{
let router=createBrowserRouter([
  {
    path:'',
    element:<RootLayout/>,
    children:[
      {
        path:'',
        element:<Home_00/>,
      },
{
path:'student_log_reg',
element:<Student_log_reg_/>,
},
{
  path:'student_register',
  element:<Student_Reg/>,
  
},
{
  path:'student_login',
  element:<Student_Login/>
},
     
      {
        path:'student_home/:username',
        element:<Student_Home_00/>,
      },
      {
            path:'campus_event_home',
            element:<CampusEvent_Home/>
      },
      {
            path:'canteen_home',
            element:<Canteen_Home/>
      },
      {
            path:'stationary_home',
            element:<User_stationary_00/>
      }
        
      ,
      
      {
        path:'admin_register',
        element:<Admin_Reg/>,
        children:[
          {
            path:'canteen_login',
            element:<Canteen_login/>
          },
          {
            path:'stationary_login',
            element:<Stationary_login/>
          },
          {
            path:'campusevent_login',
            element:<Campusevent_login/>
          }
        ]
      },
      {
       path:'canteen_admin/:username',
       element:<Canteen_Admin/>,
      },
      {
        path:'stationary_admin/:username',
        element:<Stationary_Admin/>
      },
      {
        path:'campusevent_admin/:username',
        element:<Campus_Event/>
      },
      {
        path:'get_active_users',
        element:<Get_active_users/>
      },
      {
        path:'contactus',
        element:<ContactUs/>
      }
    ]
  }
])




  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
