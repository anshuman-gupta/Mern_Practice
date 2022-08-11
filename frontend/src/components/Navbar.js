import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"

function Navbar() {
    const navigate= useNavigate()

    const handlelogout=()=>{
        localStorage.setItem("token","")
        navigate("/")
    }

  return (
    <div>
       
<nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Todo App</a>
    {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
     { localStorage.getItem("token")? <div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" to="/profile" style={{color:"white"}}>Profile</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/todo" style={{color:"white"}}>Tasks &nbsp;&nbsp;</Link>
        </li>
      </ul>
      
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0"> 
            <li class="nav-item">
            <button  class ="nav-link btn btn-danger" to="/login" style={{color:"white"}} onClick={handlelogout}> Logout</button>
            </li>      
        </ul></div></div>:
        <ul class= "navbar-nav ml-auto mb-2 mb-lg-0">
            <li class="nav-item">
            <Link class ="nav-link" to="/login" style={{color:"white"}}>Login</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to='/signup' style={{color: "white"}}>Register</Link>
            </li>
        </ul>}

    </div>
</nav>

    </div>
  )
}

export default Navbar