import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Welcome() {
  const navigate = useNavigate();
    let loggedUser = JSON.parse(localStorage.getItem("user")) || "test";

    useEffect(()=>{
      if(loggedUser == "test"){
        navigate("/login")
      }
    })

   
  return (
    <>
      <h1>Welcome {loggedUser.name}</h1>
    </>
  )
}

export default Welcome
