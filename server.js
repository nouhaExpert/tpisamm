// const http=require("http")
// const server=http.createServer((req,res)=>{
//     res.end("Voila la reponse du serveur !")
// })
// server.listen(process.env.PORT || 5000)
const http=require("http")
const app=require("./app")
const port=process.env.PORT || 5000
const server=http.createServer(app)
server.listen(port,()=>{
  console.log(  "Listening on " + port)
})
