const mongoose = require("mongoose")
const schema = mongoose.Schema
mongoose.connect("mongodb://localhost:27017/todo").then((res)=>console.log("connecting")).catch((err)=>console.log(err))

// const data = {
//     email:"john@gmail.com"
//     title:"xxx",
//     text
//     completion true
// }

const todoSchema = new schema({
    email:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    text:{
        type:String,
        requied: true
    },
    completion:{
        type: Boolean,
        default: false
    }
})

const todoModel = mongoose.model("todomdata", todoSchema)
module.exports= todoModel

