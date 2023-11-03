const express=require("express")
const app=express()
const mongoose=require("mongoose")
const taskRoutes = require("./routes/task")
const userRoutes = require("./routes/user")
mongoose.connect(
    // "mongodb+srv://test:Amk0oHOryTvpxetS@demo.t1s8bvc.mongodb.net/test",
    "mongodb://127.0.0.1:27017/task",
{useNewUrlParser: true, useUnifiedTopology: true}
)
.then(()=> console.log("connexion à MongoDB réussie !"))
.catch((e)=>console.log("Connexion à MongoDB échouée!",e))
// app.use((req,res,next)=>{
//     console.log("Requéte recue !")
//     next()
// })
// app.use((req,res,next)=>{
//     res.status(201)
//     next()
// })
// app.use((req,res,next)=>{
//     res.json({message:"Votre requette a bien ete recue !"})
//     next()
// })
// app.use((req,res)=>{
//     console.log("Reponse envoyée avec succés !")

// })
app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, x-Requested-with,Content, Accept, Content-Type, Authorization"

    )
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    )
    next()
})
app.use(express.json()) // il permet de créer req.body
app.use("/api/tasks", taskRoutes)
app.use("/api/auth", userRoutes)
module.exports=app