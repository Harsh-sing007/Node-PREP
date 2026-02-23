// export const getProducts = (req, res) => {
//     res.send("This is get request of product router")
// }

// export const createProduct = (req, res) => {
//     res.send("This is post request of product router")
// }

//for models
import products from "../models/productModel.js"

export const getProducts = (req, res) => {
    res.send(products)
}

export const createProduct = (req, res) => {
    res.send("Product Created")
}