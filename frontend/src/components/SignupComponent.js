import { useState } from "react";
import { useNavigate,Link } from "react-router-dom"
import axios from "axios"

export default function SignUpComponent(){
    const navigate=useNavigate()
    const [message,setMessage]=useState("")
    const [flag,setFlag]=useState(false)
    const [email,setemail]=useState("")
    const [password,setPassword]=useState("")
    const [role, setRole]= useState("")
    const [country, setCountry]= useState("")
    const [age, setAge]= useState("")
    const [pin, setPin] = useState("")

    const handleChange=(e)=>{
        if(e.target.name==="email"){
           
            setemail(e.target.value)
        }
        if(e.target.name==="password"){
          
            setPassword(e.target.value)
        }
        if(e.target.name==="role"){
          
            setRole(e.target.value)
        }
        if(e.target.name==="country"){
          
            setCountry(e.target.value)
        }
        if(e.target.name==="age"){
          
            setAge(e.target.value)
        }
        if(e.target.name==="pin"){
          
            setPin(e.target.value)
        }
    }

    
    const handleSubmit=async (e)=>{
        e.preventDefault()
        let serverresponse;
        
        //console.log("hello bro")
        try{
        serverresponse=await axios.post("http://localhost:3001/authentication/signup",{"email":email,"password":password,"role":role,"country":country,"age":age,"pincode":pin})
        setFlag(true)
        
        setMessage(serverresponse.data.msg)
        console.log(message)
        }
        catch(err){
           console.log("error while signup")
        }
    }

    const handlelogout=()=>{
        localStorage.setItem("token","")
        navigate(`/signup`)
    }


    return(
        <div>
            {localStorage.getItem("token")?
            <div>
                <h3>"You are already signed in"</h3>
                <button onClick={handlelogout}>Log out</button>
            </div>: 
        <div>
            <div className="register-page">
            <div class="form">
                <form className="register-form">
                    <input type='text' name="email" placeholder="Email" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="password" placeholder="Password" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="role" placeholder="Role" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="country" placeholder="Country" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="age" placeholder="Age" onChange={(e)=>handleChange(e)}></input>
                    <input type='text' name="pin" placeholder="Pincode" onChange={(e)=>handleChange(e)}></input>
                    <button onClick={handleSubmit}>signup</button>
                    <p className="message">Already registered? <Link to="/login">Sign In</Link></p>
                </form>
            </div>
            </div>

            {/* <form>
                Email:<input type='text' name="email" onChange={(e)=>handleChange(e)}></input>
                Password:<input type='text' name="password" onChange={(e)=>handleChange(e)}></input>
                Role:<input type='text' name="role" onChange={(e)=>handleChange(e)}></input>
                Country:<input type='text' name="country" onChange={(e)=>handleChange(e)}></input>
                Age:<input type='text' name="age" onChange={(e)=>handleChange(e)}></input>
                Pincode:<input type='text' name="pin" onChange={(e)=>handleChange(e)}></input>
            </form>
            <button onClick={handleSubmit}>signUp</button> */}
        </div>}
            {
                flag?navigate(`/login`):<h3>{message}</h3>
            }
        </div>
    )
}