const PORT = 7000;
const express = require("express");
const app = express();

// app.get("/", (req,res) => {
//     res.json("Hello World");
// });

// app.get("/users", (req, res) => {
//     res.json("Users");
// });

// Routes declaration
// default routes
const defaultRoutes = require("./routes/default.routes");
// authentication routes
const authRoutes = require("./routes/auth.routes.js");

app.use("/", defaultRoutes);
app.use("/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening at ==>> http://127.0.0.1:${PORT}`);
})