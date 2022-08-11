const express= require("express")
const router = express.Router()
const Controllers = require("../controller/controller")
const authorize = require("../controller/controller")


router.get("/todo",Controllers.authorize,Controllers.getTask)
router.post("/todo/create",Controllers.authorize, Controllers.createTask)
router.delete("/todo/delete/:id", Controllers.deleteTask)
router.put("/todo/update/:id",Controllers.updateTask)
router.get("/todo/completed",Controllers.authorize,Controllers.getCompleted)

module.exports= router




