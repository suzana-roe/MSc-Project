"use strict";

// The application layer uses tissuebank classes
const tissuebank = require("../tissuebank.js");

// The application layer talks to the data layer
const data = require("../data/data.js");

// Import express library.
const express = require("express");

// Create express application
var app = express();

// Add static files location
app.use(express.static("static"));

// Add /registration endpoint
app.get("/registration/:code", function(req, res) {
  // Return "Registration <code>"
  res.send("Registration" + req.params.code);
});

// Add /registrations endpoint
app.get("/registrations", function(req, res) {
  // Return "All registrations"
  res.send("All registrations");
});

// Start listening on port 3000
app.listen(3000, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log("Server started.");
  });