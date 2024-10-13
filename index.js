const express = require("express");
const app = express()
const cors = require("cors")
app.use(cors())
var user = "john"
var pass = 123
app.use(express.urlencoded({extended:true}))
app.use(cors({ origin: "http://localhost:3000" }));

app.get("/login",function(req,res){
   if(req.query.username===user && Number(req.query.password)===pass)
   {
    res.send(true)
   }
   else{
    res.send(false)
   }
})
app.listen(5000,function(){
    console.log("server started...")

})