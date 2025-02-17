const express=require("express");
const {adminauth,userauth}=require("./milddelware/auth");
const app = express();

app.use('/admin',adminauth);
//app.use('/user',userauth);

app.get("/user",userauth,(req,res,next)=>{
    res.send("user data sent"); 
   });
app.get("/admin/getdata",(req,res,next)=>{
  res.send("all data sent"); 
 });
 app.get("/admin/deleteuser",(req,res)=>{
    res.send("deleted the user ")
 })
// this checking code apply for every where so take time then comes 
// middleware in the picture to auth the user to do some sensetive. 
// genraly write the middleware in the app.use() for accept all type of 
//requests 
app.listen(3000,()=>{
    console.log("server is running ");
    
});
