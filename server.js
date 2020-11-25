// import express and body-parser modules. Express is for building the Rest apis, and body-parser helps to parse the request and create the req.body object that we will need to access in our routes.
const express = require("express");
const bodyParser = require("body-parser");

// create an Express app.
const app = express();

// add body-parser middlewares using app.use() method.
// parse requests of content-type: application/json
app.use(bodyParser.json());
app.use(express.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// define a GET route which is simple for test.
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Britsa application." });
});

require("./app/routes/customer.routes.js")(app);

// listen on port 3000 for incoming requests.
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});