///////////////////
//DEPENDENCIES
//////////////////
require("dotenv").config();
// const { PORT = 4000 } = process.env;
const express = require("express");
// const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
// const morgan = require("morgan");

const projects = require("./projects.json");
const about = require("./about.json");

//////////////////
//DATABASE CONNECTION
///////////////////

// mongoose.connect(MONGODB_URL);

// mongoose.connection
//   .on("open", () => console.log("You are connected to Mongoose"))
//   .on("close", () => console.log("You are disconnected from Mongoose"))
//   .on("error", (error) => console.log(error));

////////////
//MIDDLEWARE
////////////
app.use(cors());

///////////////
//MODELS
//////////////
//test
app.get("/", (req, res) => {
  res.send("Hello World Project");
});

// route for retrieving projects
app.get("/projects", (req, res) => {
  //send projects via JSON
  res.json(projects);
});

// route for retrieving about info
app.get("/about", (req, res) => {
  //send projects via JSON
  res.json(about);
});

const PORT = process.env.PORT || 4000;

//Listener
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
