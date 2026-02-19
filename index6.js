import express from 'express';
const app = express();
app.listen(8080);
// app.get("/:name",(req,res)=> {
//     res.send("Hello "+req.params.name);                     //IN postman we used   http://localhost:8080/john to get Hello John
// });                                                         //earlier we used query string like http://localhost:8080/?name=john

// app.get("/",(req,res)=> {
//     res.send("Hello "+req.query.name);                    
// });                                                            //    http://localhost:8080/?name=john

//status 200 means success. If we dont write res.send() it will stuck in infinite loop

app.get("/",(req,res)=> {
    res.send("Hello "+req.query.name + req.query.age);                       //   http://localhost:8080/?name=john&age=21
});         

