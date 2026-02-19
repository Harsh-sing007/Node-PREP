import express from 'express'
const app=express();
app.listen(8080);
app.get("/",(req,res)=>{
    const user = {
        name:"Harsh",
        email:"harsh@gmail.com",
        role:"Student"
    };
    // res.send(user);
    res.json(user);   //for json format
});
