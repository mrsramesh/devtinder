const express=require("express");

const app = express();

// app.use("/user",(req,res)=>{
//     // route Handdler
//    // res.send("route handler 1");
// })

// a multyple route handle has no send fx then it hanging 
// a router has multiple route handler
app.use("/user",(req,res,next)=>{
  //  route Handdler
  console.log("handing the route user 1");
  next();
  // res.send("route handler 1");
},(req,res,next)=>{
    console.log("handing the route user 2");
  next();
  // res.send("route handler 2");
 },(req,res,next)=>{
    console.log("handing the route user 3");
  next();
   //res.send("route handler 2");
 },(req,res,next)=>{
    console.log("handing the route user 4");
  next();
   //res.send("route handler 2");
 },(req,res,next)=>{
    console.log("handing the route user 5");
  next();
   res.send("route handler 5");
 })

// if have multiple route handler in route if we want to run secound Hendler fx then nouse 
// of the .send() and use the next() fx to move the next handler function 
 // without next and send (nouse ) HFX ko call nhi kr sakte 

   //  2 route hander fx mese ek ka hi response send hota hai 
//  ek send hote ke bad connect kat jata hai but callstack me code 
//  chalata rahata hai or jab ho dusra send fx send karat hai to error create hote hai 
//  kyoki tcp connection kat gya . ek api se ek time pr ek hi respond send kr skte hai 
// it work for all http methods 
app.listen(3000,()=>{
    console.log("server is running ");
    
});
