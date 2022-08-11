import { useState, useEffect} from "react"
import axios from 'axios'
import Create from "./Create";
import Completed from "./Completed";
import style from "./New.css"


function Todo(){
    const [data, setdata]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/user/todo",{ headers:{Authorization:"Bearer "+localStorage.getItem("token")}} ).then((res)=>setdata(res.data)).catch((err)=>console.log(err))
    }, [data])

    const deleteitem= (id)=>{
            axios.delete(`http://localhost:3001/user/todo/delete/${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }

    const done= (id)=>{
        axios.put(`http://localhost:3001/user/todo/update/${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }

    const len= data.length
    

    return(
        <div>
            <Create></Create>
            <h1 className="bg"><b>Pending Tasks: {len}</b></h1>
        <div className="row">
        { data.map((item, index)=>
            <div className="card col-md-3 ml-3 mb-3" style={{width: "18rem"}}>
                <div className="card-body">
                 <h5 className="card-title"><b>{item.title}</b></h5>
                 <p className="card-text">{item.text}</p>
                 <button className="btn btn-primary" onClick={()=>done(item._id)}>Done</button>
                 <button className="btn btn-primary ml-3" onClick={()=>deleteitem(item._id)}>Delete</button>
             </div>
        </div>)}
        </div>
        <Completed></Completed>
        </div>
    )

}

export default Todo