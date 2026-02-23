// export const getUsers = (req, res) => {
//     res.send("This is get request of user router")
// }

// export const createUser = (req, res) => {
//     res.send("This is post request of user router")
// }


//For models 
import users from "../models/userModel.js"

export const getUsers = (req, res) => {
    res.send(users)
}

export const createUser = (req, res) => {
    res.send("User Created")
}