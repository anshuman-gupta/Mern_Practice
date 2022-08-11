const express= require("express")
const app= express()

const mongoose= require("mongoose")
const bodyparser= require("body-parser")
const authentication= require("./routes/Authentication")
const protectedroute= require("./routes/ProtectedRoutes")
var cors = require('cors')

app.use(cors()) 

app.use(bodyparser.json())
app.use("/",authentication)
app.use("/",protectedroute)

mongoose.connect("mongodb://localhost:27017/sinontesting").then((res)=>console.log("db connected")).catch((err)=>console.log("error occured"))

module.exports = app