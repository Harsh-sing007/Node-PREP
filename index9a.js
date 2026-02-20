import express from 'express';
const app = express();

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
const auth = (req, res, next) => {
    const id = req.params.id;

    if (id === "1234") {
        next(); 
    } else {
        res.send("Access Denied");
    }
};
app.get("/:id", auth, (req, res) => {
    res.send("Welcome");
});