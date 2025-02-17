const express=require("express");

const app = express();
app.get('/user',(req,res)=>{
res.send({
    fname:"kanhaiya",
    lanme:"lal"
});
});

app.post('/user',(req,res)=>{
    // save the data to the databse
    res.send("save the data successfully ");
})
app.delete('/user',(req,res)=>{
res.send("delete the user successfully !");
})
app.use("/text",(req,res)=>{
    res.send("texxt from the server");
})
app.use("/hello",(req,res)=>{
    res.send("hellow from the server");
})
// app.use("/",(req,res)=>{
//     res.send("hello ");  
// })
// app.use(request handler fx.) for all request single respond 
// app.use(path,RH FX()) // respond according to the path is match 
app.listen(3000,()=>{
    console.log("server is running ");
    
});