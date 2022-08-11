import { useState, useEffect } from "react";
import axios from 'axios'



function Create(){
    const [title,settitle]= useState("")
    const [text, settext] = useState("")
    const addItem=()=>{    
           axios.post("http://localhost:3001/user/todo/create", {
            title:title,
            text:text
         },{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((res)=>console.log(res)).catch((err)=>console.log(err)) 
      }
    const handleText=(e)=>{
        settext(e.target.value)
    }
    const handleTitle=(e)=>{
        settitle(e.target.value)

    }

    return(
        <div>
        <div className="al">
            <b><label style={{color:"black"}}>Task Title:</label></b> <input type='text' onChange={(e)=>handleTitle(e)}></input>
           <b> <label style={{color:"black"}}>&nbsp;&nbsp; Task Description:</label></b> <input type='text' onChange={(e)=>handleText(e)}></input>&nbsp;&nbsp;&nbsp;
            <button className="btn btn-success" onClick={addItem}> Add task</button>
        </div>
        </div>
    )


}

export default Create