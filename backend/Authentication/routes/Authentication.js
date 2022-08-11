const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const privateKey= "JamesBond"

const UserModel = require("../model/UserModel")

router.post("/signup", async (req, res)=>{
    const data= req.body
    const user= await UserModel.findOne({email: data.email})
    if(user){
        res.status(400).send({msg:"email already exist", status:false})
    }
    else{
        const hashedpassword = await bcrypt.hash(data.password, 4)
        try{
        const result = await UserModel.create({
            email: data.email,
            password: hashedpassword,
            role: data.role,
            country:data.country,
            age: data.age,
            pincode: data.pincode
        })
        const my_result =await result.signUp()
        res.send("signup")
    }
    catch(err){
        res.status(404).send("its an error")
    }
}

})

router.post("/login",async (req, res)=>{
    const data = req.body
    const result = await UserModel.signInStatics(data)
    res.send(result)
})





module.exports = router
