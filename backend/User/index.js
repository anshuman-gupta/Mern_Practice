const express= require("express")
app= express()
const cors = require("cors")
app.use(cors())
const bodyparser= require("body-parser")
app.use(bodyparser.json())
const routes= require("./route/todroute")
app.use("/",routes)


module.exports = app











