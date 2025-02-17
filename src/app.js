const express=require("express");

const app = express();
// req /user,/user/xyz,/user/1 
app.get('/user/:uid/:name/:pass',(req,res)=>{
    console.log(req.params);
res.send({
    fname:"kanhaiya",
    lanme:"lal" });
});
app.listen(3000,()=>{
    console.log("server is running ");
    
});
