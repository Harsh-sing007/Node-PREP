//configuration was done in routes folder
// import express from "express"
// import userRouter from "./userRoutes.js"
// import productRouter from "./productRoutes.js"

// const app = express()

// app.listen(8080, () => console.log("Server Started"))

// app.use("/api/users", userRouter)
// app.use("/api/product", productRouter)


import express from "express"
import userRouter from "./userRouter.js"
import productRouter from "./productRouter.js"

const app = express()

app.listen(8080, () => console.log("Server Started"))

app.use("/api/users", userRouter)
app.use("/api/product", productRouter)