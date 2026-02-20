// import express from 'express';
// const app = express();

// app.listen(8080, () => {
//     console.log("Server running on port 8080");
// });
// const auth = (req, res, next) => {
//     const id = req.params.id;

//     if (id === "1234") {
//         next(); 
//     } else {
//         res.send("Access Denied");
//     }
// };
// app.get("/:id", auth, (req, res) => {
//     res.send("Welcome");
// });


// when a json  token format is given 
// import express from 'express';
// const app = express();

// app.listen(8080, () => {
//     console.log("Server running on port 8080");
// });
// app.use(express.json());

// app.post("/", (req, res) => {
//     const token = req.body.token;

//     if (token === "1234") {
//         res.status(200).send("Welcome");
//     } else {
//         res.status(403).send("Access Denied");
//     }
// });


//get method, auth, bearer token  
import express from 'express';
const app = express();
app.listen(8080, () => {
    console.log("Server running on port 8080");
});
app.get("/", (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send("No Token Provided");
    }
    const token = authHeader.split(" ")[1];

    if (token === "1234") {
        return res.status(200).send("Welcome");
    } else {
        return res.status(403).send("Access Denied");
    }
});