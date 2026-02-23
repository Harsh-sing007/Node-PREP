import express from "express"

const userRouter = express.Router()

userRouter.post("/", (req, res) => {
    res.send("This is post request of user router")
})

userRouter.get("/", (req, res) => {
    res.send("This is get request of user router")
})

export default userRouter