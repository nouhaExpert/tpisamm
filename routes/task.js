const express=require("express")
const router= express.Router()
const taskController=require("../controllers/task")
const auth=require("../middlewares/auth")
router.get("/",auth.loggedMiddleware,taskController.fetchTasks)
router.get("/:id",auth.loggedMiddleware,taskController.getTaskById)
//spred opération ...req.body
//programmation asyncrone permet de exécuter le code aprés then avant le code qui dans then
router.post("/",auth.loggedMiddleware, taskController.addTask)
//patch: envoyer just les champs à modifier
//put : envoyer tout les champs
router.patch("/:id",auth.loggedMiddleware,auth.isAdmin,taskController.updateTask)
router.delete("/:id",auth.loggedMiddleware,taskController.deleteTask)
module.exports=router