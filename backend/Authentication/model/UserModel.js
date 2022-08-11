const bcrypt = require("bcrypt")
const jwt= require("jsonwebtoken")

const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    role:{
        type: String
    },
    country:{
        type: String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    pincode:{
        type:Number,
        required:true
    },
    address:{
        type:String
    },
})

//Custom methods
// if user forget to give the address key then we can use custom method so the data from country and pincode automatically inserted into address !

UserSchema.methods.signUp=async function(){
    if(!this.address){
        this.address=this.country+"  "+this.pincode
    }
    await this.save()
}


//static method
UserSchema.statics.signInStatics= async function(data){
    const user= await UserModel.findOne({email:data.email})
    if(user){
        const comparison = await bcrypt.compare(data.password, user.password)
        if(comparison){
            const generatedtoken=jwt.sign({email:data.email},"jamesbond",{expiresIn:'1h',algorithm:'HS512',issuer:'olympus.gl.in'})
            return {msg:"login successful",status:true, token:generatedtoken, statusCode:200}
            
        }
        else{
            return {msg:"login is unsuccessful, check your password",status: false, statusCode:404}
        }
    }
    else{
        return {msg: "login is unsuccessful, username does not exists", status: false, statusCode: 404}
    }
}

const UserModel = mongoose.model("UserModel", UserSchema)

module.exports = UserModel
