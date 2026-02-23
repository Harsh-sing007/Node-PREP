import express from "express"
import jwt from "jsonwebtoken"
const app = express()
const SECRET = "lpu"
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzg2NywiZXhwIjoxNzcxODM3NDY3fQ.SpfNx-wYnkansSkPC4DPVCt-mu2V4_lXmXDA2MPhHGA"
const user = jwt.verify(token,SECRET)
console.log(user)
//app.listen(8080,()=>console.log("Server Started"));