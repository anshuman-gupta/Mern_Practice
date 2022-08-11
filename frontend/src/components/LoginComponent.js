import { useState } from "react";
import { useNavigate,Link } from "react-router-dom"
import axios from "axios"

export default function LoginComponent(){
    const navigate=useNavigate()
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(false)
    const [uname,setuname]=useState("")
    const [password,setPassword]=useState("")
    const handleChange=(e)=>{
        if(e.target.name==="username"){
           
            setuname(e.target.value)
        }
        if(e.target.name==="pwd"){
          
            setPassword(e.target.value)
        }
    }
    const handleSubmit=async (e)=>{
        e.preventDefault()
        let serverresponse;
        try{
        serverresponse=await axios.post("http://localhost:3001/authentication/login",{"email":uname,"password":password})
            setMessage(serverresponse.data.msg)
            setFlag(serverresponse.data.status)
           if(serverresponse.data.status){
            localStorage.setItem("token",serverresponse.data.token)
           }
        }
        catch(err){
           console.log("I got an error")
        }
    }
    return(
        <div>

<div className="login-page">
        <div class="form">

            <form className="login-form">
            <input type="text" placeholder="username" name="username" onChange={(e)=>handleChange(e)}/>
            <input type="text" placeholder="password" name="pwd" onChange={(e)=>handleChange(e)}/>
            <button onClick={handleSubmit}>signin</button>
            <p className="message">Not registered? <Link to='/signup'>Register here</Link></p><br/>
            {flag?navigate(`/todo`):<p style={{color:"red"}}><b>{message}</b></p>}
            </form>
        </div>
        </div>

            {/* <form>
                Username:<input type='text' name="username" onChange={(e)=>handleChange(e)}></input>
                Password:<input type='text' name="pwd" onChange={(e)=>handleChange(e)}></input>
            </form>
            <button onClick={handleSubmit}>signin</button> */}
            {
                // flag?navigate("/todo"):<h3>{message}</h3>
            }
        </div>
    )
}