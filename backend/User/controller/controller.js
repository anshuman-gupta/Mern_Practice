const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")

const todoModel= require("../model/model")

const Controllers = {}

Controllers.getTask= function(req, res){
    return todoModel.find({completion:false, email:req.token.email}).then((result)=>res.send(result)).catch((err)=>res.send("some error occurd"))

}

Controllers.createTask= async function(req, res){
    const data= req.body
    try{
        let result = await todoModel.create({
            email:req.token.email,
            title:data.title,
            text:data.text
        })
    res.send(result)
    }
    catch(err){
        res.send(err)
    }
    return;
}

Controllers.deleteTask = async function(req, res){
    const delid= req.params.id
    return todoModel.findByIdAndDelete(delid).then((result)=>res.send(`item deleted with ID : ${delid}`)).catch((err)=>console("error while deleting"))
}

Controllers.updateTask =async function(req, res){
    const upid= req.params.id
    console.log(upid)
     todoModel.findByIdAndUpdate(upid,{completion:true}).then((result)=>res.send(result)).catch((err)=>res.send("error !"))
     return 
}

Controllers.getCompleted= async function(req, res){
    return todoModel.find({completion: true, email:req.token.email}).then((result)=>res.send(result)).catch((err)=>res.send("some error occurd"))
}

Controllers.authorize = async function(req,res,next){
    try{
        let reqtoken=req.headers['authorization']
        const token=reqtoken.replace('Bearer ','')
        const result=jwt.verify(token,'jamesbond')
        req.token=result
        next()
    }
    catch(err){
        res.send("error in authorization")
    }
}



module.exports = Controllers