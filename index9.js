import express from 'express';
const app = express();
app.listen(8080);
const logger = ()=> {

}
app.use(logger)

app.get("/",(req,res)=>{
   // res.end()
  // res.send("Hello World")
   // res.json({name:"Johm",age: 21})
   res.json(req.url);
});