import { useState, useEffect } from "react";

function Get_active_users() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((res) => res.json())
      .then((list) => setUsers(list));
  }, []); // <-- empty dependency array

  return (
    <div>
        <div><img src="https://vnrvjiet.ac.in/assets/images/Header%20Logo.png" className="w-25 h-25 mx-auto m-3"></img></div>
      <h1 className="display-1 text-center fs-2 fw-bold">Active user list</h1>
      <div className="container">
        <table className="table p-5 mt-4 mx-auto">
          <thead>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>EMAIL</th>
            <th>Limit</th>
          </thead>
          <tbody className="">
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.Limit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Get_active_users
