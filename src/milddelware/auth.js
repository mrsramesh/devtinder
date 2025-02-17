const adminauth=(req,res,next)=>{
    console.log("admin auth is getting checked!!");
     // logic of checking if the request is authorized
     const token="xyz";
     const isadminauthorized =token=== "xys";
     if(isadminauthorized){
    //    res.send("Deleted a user ");
    next();
     }
     else{
       res.status(402).send("unorthrized admin ")
     }
};

const userauth=(req,res,next)=>{
    console.log("admin auth is getting checked!!");
     // logic of checking if the request is authorized
     const token="xys";
     const isadminauthorized =token=== "xys";
     if(isadminauthorized){
    //    res.send("Deleted a user ");
    next();
     }
     else{
       res.status(402).send("unorthrized user123 ")
     }
};

module.exports={
    adminauth,userauth
}