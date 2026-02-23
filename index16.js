//create a new user for signin and login and verify if true create a token number then return it and paste as post then display
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.listen(8080, () => console.log("Server started"));

const users = [];
const SECRET_KEY = "mysecretkey";


// SIGNUP
app.post("/signup", async (req, res) => {

  const body = req.body;

  const hashPassword = await bcrypt.hash(body.password, 10);
  body.password = hashPassword;

  users.push(body);

  res.json({message:"User Created"});
});


// LOGIN → CREATE TOKEN
app.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const found = users.find(user => user.email === email);

  if(!found){
      return res.status(401).json({message:"User not found"});
  }

  const chkPassword = await bcrypt.compare(password, found.password);
  if(!chkPassword){
      return res.status(401).json({message:"Invalid Password"});
  }
  // CREATE TOKEN
  const token = jwt.sign(
      { email: found.email },
      SECRET_KEY
  );
  res.json({
      message:"Login Successful",
      token:token
  });
});
// VERIFY TOKEN → DISPLAY USER
app.post("/profile",(req,res)=>{
    const token = req.body.token;
    try{
        const decoded = jwt.verify(token, SECRET_KEY);

        const foundUser = users.find(
            user => user.email === decoded.email
        );
        res.json(foundUser);
    }catch(err){
        res.status(401).json({
            message:"Invalid Token"
        });
    }
});
// SHOW USERS
app.get("/users",(req,res)=>{
    res.json(users);
});
// HOME
app.get("/",(req,res)=>{
    res.send("Hello World");
});