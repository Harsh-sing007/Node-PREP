import express from 'express';
const app = express();
app.listen(8080);
const logger = (req,res)=> {
req.message = "This"
console.log(req.url)
next()
};

app.use(logger);

app.get("/",(req,res)=>{
   // res.end()
  // res.send("Hello World")
   // res.json({name:"Johm",age: 21})
   console.log(req.message);
   res.json(req.url);
});