import { useState, useEffect } from "react";
import axios from 'axios'

function Completed(){
    const [data, setdata]= useState([])
    const [counter, setcounter] = useState(0)
    useEffect(()=>{        
     axios.get('http://localhost:3001/user/todo/completed',{ headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((res)=>setdata(res.data)).catch((err)=>console.log(err))
    }, [data])

    const removeitem= (id)=>{
        axios.delete(`http://localhost:3001/user/todo/delete/${id}`).then((res)=>console.log(res)).catch((err)=>console.log(err))
    }

    const len = data.length
    
    return(
        <div>
            <h1 className="bg"><b>Completed Task: {len}</b> </h1>
            <div className="row">
        { data.map((item, index)=>
        
            <div className="card col-md-3 ml-3 mb-3" style={{width: "18rem"}}>
                <div className="card-body">
                 <h5 className="card-title"><b>{item.title}</b></h5>
                 <p className="card-text">{item.text}</p>
                 <button className="btn btn-primary" onClick={()=>removeitem(item._id)}>Remove</button>
             </div>
        </div>)}
                 </div>


        </div>
    )
   
}

export default Completed