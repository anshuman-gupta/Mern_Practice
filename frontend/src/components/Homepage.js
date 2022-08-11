import React from 'react'
import {Link} from "react-router-dom"

function Homepage() {
  return (
   <div>
    
    <div class="main-container">
  <div class="heading">
    <h1 class="heading__title">Welcome To My Todo App</h1>
    
  </div>
  <div class="cards">
    <Link className='temp' to="/login">
    <div class="card card-1">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title" style={{color:"red"}}>LOGIN</h2>
    </div>
    </Link>
    <Link className='temp' to="/signup">
    <div class="card card-2">
      <div class="card__icon"><i class="fas fa-bolt"></i></div>
      <p class="card__exit"><i class="fas fa-times"></i></p>
      <h2 class="card__title" style={{color:"red"}}>REGISTER</h2>
    </div>
    </Link>
    
  </div>
</div>

    </div>
  )
}
export default Homepage