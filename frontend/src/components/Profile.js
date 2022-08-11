import { useParams,useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
export default function Profile(){
    const navigate=useNavigate()
    const {email}=useParams()
    const [serverresponse,setResponse]=useState({})
   useEffect(()=>{
        axios.get(`http://localhost:3001/authentication/getUser/${email}`,{
            headers:{Authorization:"Bearer "+localStorage.getItem("token")}
        }).then((res)=>setResponse(res.data)).then((err)=>console.log(err))
    })
    const handleUpdate=(e)=>{
        e.preventDefault()
        navigate("/updatepassword")
    }
    return(
        <div className="card card-3">
            <h1 style={{color: "red"}}>Welcome {serverresponse.email}</h1><hr/>
            <h3>Your Role :{serverresponse.role}</h3>
            <h3>Your Age: {serverresponse.age}</h3>
            <h3>Your address: {serverresponse.address} </h3><br/>

           
            <button className="btn btn-danger" onClick={(e)=>handleUpdate(e)}>UPDATE PASSWORD</button>
        </div>
    )
}