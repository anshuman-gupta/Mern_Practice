const express=require("express")
const router=express.Router()
const bcrypt=require("bcrypt")
const UserModel=require("../model/UserModel")
const jwt=require("jsonwebtoken")

router.post("/updatepassword",authorize,async (req,res)=>{
    const data=req.body
    try{
        const hashedpassword=await bcrypt.hash(data.upassword,4)
        const update=await UserModel.findOneAndUpdate({email:req.token.email},{password:hashedpassword})
        console.log(req.token.email)
        if(update){
            res.send({msg:"updated successfully",status:true})
        }
        else{
            res.send({msg:"update failed",status:true})
        }
    }
    catch(err){
        console.log(err)
        res.send("error in authorization")
    }

})

router.get("/getUser/:email",authorize,async(req,res)=>{
    const data=req.params.email
    try{
     const result= await UserModel.findOne({email:req.token.email})
     if(result){
      res.status(200).send(result)
     }
    else{
      res.status(400).send({msg:"not found"})
    }
    }
    catch(err){
      console.log(err)
    }
  })

function authorize(req,res,next){
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

module.exports=router
