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

// Add a single /registration endpoint
app.get("/registration/:code", function(req, res) {
  // Call getRegistration on data
  data.getRegistration(req.params.code, function(registration) {
  // Return "Registration <code>"
      res.json(registration);
  });
});

// Add /registration endpoint
app.get("/registrations", function(req, res) {
// Call getStudents on data
  data.getRegistrations(function(registrations) {
  // Return "All registration"
      res.json(registrations);
  });
});


// Start listening on port 3000
app.listen(3000, function(err) {
    if (err) {
      return console.error(err.message);
    }
    console.log("Server started.");
  });