const PORT = 7000;
const express = require("express");
const app = express();
const path = require("path");
const  ejs = require("ejs");
const logger =  require("morgan");

// app.get("/", (req,res) => {
//     res.json("Hello World");
// });

// configuring express
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"public")))

// setting up morgan
app.use(logger("dev"));

// app.get("/users", (req, res) => {
//     res.json("Users");
// });

// configuring templating engine EJS
app.set("view engine","ejs")
app.set("views", path.join(__dirname,"views"))

// Routes declaration
// default routes
const defaultRoutes = require("./routes/default.routes");
// authentication routes
const authRoutes = require("./routes/auth.routes.js");
const morgan = require("morgan");

app.use("/", defaultRoutes);
app.use("/auth", authRoutes);


app.listen(PORT, () => {
    console.log(`Server is listening at ==>> http://127.0.0.1:${PORT}`);
})
