//configuration was done in routes folder
// import express from "express"

// const productRouter = express.Router()

// productRouter.get("/", (req, res) => {
//     res.send("This is get request of product router")
// })

// productRouter.post("/", (req, res) => {
//     res.send("This is post request of product router")
// })

// export default productRouter

import express from "express"
import { getProducts, createProduct } from "./controllers/productController.js"

const productRouter = express.Router()

productRouter.get("/", getProducts)
productRouter.post("/", createProduct)

export default productRouter