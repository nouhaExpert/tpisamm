const Task=require("../models/task")
const fetchTasks=(req,res,next) =>{
   const tasks= Task.find().then((tasks)=> res.status(200).json({
    model:tasks,
    message:"success"
}))
.catch((e)=>{
    res.status(400).json({
        error:e.message,
        message:"probléme d'extration",
    })
})
}
 const fetchTasksavecasync= async(req,res,next) =>{
    try{
    const tasks= await Task.find();
     res.status(200).json({
     model:tasks,
     message:"success"
 })
}catch(e){
     res.status(400).json({
         error:e.message,
         message:"probléme d'extration",
     })
 }
 }
const addTask=(req,res)=>{
    console.log(req.body)
    const task=new Task(req.body)
    task.save().then(()=>{
    res.status(201).json({
        model:task,
        message:"Objet crée !",
 } )})
 .catch((error)=>{
    res.status(400).json({
        error:error.errors,
        message:"probléme d'extration",
    })
})
 console.log("ici")//  promise c'est un traitement async donc ce traitement est exécuter avant .then
}
const getTaskById=(req,res)=>{
    // console.log(req.params.id)
    // res.send(req.params.id)
    Task.findOne({_id:req.params.id})
    .then((task)=>{
        if(!task){
            res.status(404).json({
                message:"Objet non trouvé",
            })
            return
        }
        
        res.status(200).json({
            model:task,
            message:"success"
        })
    } )
    .catch((error)=>{
        res.status(400).json({
            error:error.message,
            message:"probléme d'extration",
        })
    })

}
const updateTask=(req,res)=>{
    // console.log(req.body)
    // console.log(req.params.id)
    // res.send(req.body)
    Task.findOneAndUpdate({_id:req.params.id},
        req.body,{new:true})
        .then((task)=>{
            if(!task){
                res.status(404).json({
                    message:"Objet non trouvé",
                })
                return
            }else{
                res.status(200).json({
                    model:task,
                    message:"Objet modifié"
                })
            }
        })
        .catch((error)=>res.status(400).json({error:error.message}))
}
const deleteTask=(req,res)=>{
    // console.log(rq.params.id)
    // res.send(req.params.id)
    Task.deleteOne({_id:req.params.id})
    .then(()=> res.status(200).json({message:"objet supprimée"}))
    .catch((error)=>res.status(400).json({error}))
}
module.exports={
    fetchTasks,
    addTask,
    getTaskById,
    updateTask,
    deleteTask
}