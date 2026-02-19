
// const users  = 
// [
//     {id:1,name: "John",email: "john@gmail.com",role: "student"},
//     {id:2,name: "Cathy",email: "cathyn@gmail.com",role: "student"},
//     {id:3,name: "Admin",email: "admin@gmail.com",role: "admin"},
// ] 



//creating the array outside the app.get ()
//http://localhost:8080/
// import express from 'express';

// const app = express();
// const users = [
//     { id: 1, name: "John", email: "john@gmail.com", role: "student" },
//     { id: 2, name: "Cathy", email: "cathyn@gmail.com", role: "student" },
//     { id: 3, name: "Admin", email: "admin@gmail.com", role: "admin" }
// ];

// app.get("/", (req, res) => {
//     res.json(users);   // send full array as JSON
// });

// app.listen(8080, () => {
//     console.log("Server started on port 8080");
// });




//http://localhost:8080/1  for 1st user display
// import express from 'express';

// const app = express();

// const users = [
//     { id: 1, name: "John", email: "john@gmail.com", role: "student" },
//     { id: 2, name: "Cathy", email: "cathyn@gmail.com", role: "student" },
//     { id: 3, name: "Admin", email: "admin@gmail.com", role: "admin" }
// ];
// app.get("/", (req, res) => {
//     res.json(users);
// });
// app.get("/:id", (req, res) => {
//     const userId = Number(req.params.id);
//     const user = users.find(u => u.id === userId);
//     if (!user) {
//         return res.status(404).json({ message: "User not found" });
//     }
//     res.json(user);
// });
// app.listen(8080, () => {
//     console.log("Server started on port 8080");
// });


//need to add AN new object to the existing user 
//http://localhost:8080/users
import express from 'express';
const app = express();

// ✅ Middleware to read JSON body
app.use(express.json());

const users = [
    { id: 1, name: "John", email: "john@gmail.com", role: "student" },
    { id: 2, name: "Cathy", email: "cathyn@gmail.com", role: "student" },
    { id: 3, name: "Admin", email: "admin@gmail.com", role: "admin" }
];

// ✅ Get all users
app.get("/", (req, res) => {
    res.json(users);
});

// ✅ Add new user
app.post("/users", (req, res) => {

    const { name, email, role } = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        email,
        role
    };

    users.push(newUser);

    res.status(201).json({
        message: "User added successfully",
        user: newUser
    });
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});


//now the deleting the user 
// ✅ Delete user by ID
app.delete("/users/:id", (req, res) => {
    const userId = Number(req.params.id);

    const index = users.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    const deletedUser = users.splice(index, 1);

    res.json({
        message: "User deleted successfully",
        user: deletedUser[0]
    });
});
