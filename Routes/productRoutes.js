import express from "express"

const productRouter = express.Router()

productRouter.get("/", (req, res) => {
    res.send("This is get request of product router")
})

productRouter.post("/", (req, res) => {
    res.send("This is post request of product router")
})

export default productRouter