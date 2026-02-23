//Router

// import express from "express"
// const app = express()
// app.listen(8080,()=>console.log("Server Started"));
// const Router = express.Router()

// Router.get("/",(req,res)=>{
//     res.send("Hello World")
// })
// Router.post("/",(req,res)=>
// {
//     res.send("This is post request")
// })
// app.use("/api/users",Router)


import express from "express"
const app = express()
app.listen(8080,()=>console.log("Server Started"));

const userRouter = express.Router()
const productRouter = express.Router()

userRouter.post("/",(req,res)=>{
    res.send("This is post request of user router ")
});
userRouter.get("/",(req,res)=>
{
    res.send("This is get request of user router")
});
productRouter.get("/",(req,res)=>
{
    res.send("This is get request of product router")
});
productRouter.post("/",(req,res)=>
{
    res.send("This is post request of product router")
});
app.use("/api/users",userRouter)
app.use("/api/product",productRouter)