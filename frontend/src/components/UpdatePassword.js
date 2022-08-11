import axios from "axios"
import { useState } from "react"

const UpdatePassword=()=>{
    const [updatedPw,setUPW]=useState("")
    const [message,setMessage]=useState("")
    const handleChange=(e)=>{
     
        setUPW(e.target.value)
    }
    const updatePassword=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/authentication/updatepassword",
        {"upassword":updatedPw},
        {
            headers:{Authorization:"Bearer "+localStorage.getItem("token")}
        }).then((res)=>setMessage(res.data.msg)).catch((err)=>console.log(err))
    }
    return(
        <div>
            <h2 className="al">Update Password</h2>
    <div className="form">
        
    <form className="login-form">     
            <input type="text" placeholder="Enter the new password"onChange={(e)=>handleChange(e)}/>
            <button onClick={(e)=>updatePassword(e)}>Update</button>
            <p style={{color:"red"}}><b>{message}</b></p>
    </form>
    </div>
    </div>
    )
        
    
}
export default UpdatePassword