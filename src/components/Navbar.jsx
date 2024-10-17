import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function Navbar() {
  const navigate = useNavigate();
  let loggedUser = JSON.parse(localStorage.getItem("user"));

    useEffect(()=>{
      navigate("/")
    } , [])

    const logOutHandle = ()=>{
        localStorage.clear();
    }

  return (
  <>

    { loggedUser ? 
        <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/addproducts">Add Products</NavLink>
         <NavLink onClick={logOutHandle} to="/login">Logout({loggedUser.name})</NavLink>
        </nav>
    : 
      <nav>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
      </nav>
    }
 
    </>
  )
}

export default Navbar
