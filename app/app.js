"use strict";

// The application layer uses tissuebank classes
const tissuebank = require("../tissuebank.js");

// The application layer talks to the data layer
const data = require("../data/data.js");

// Import express library.
const express = require("express");

// Create express application
var app = express();

// Add JSON parsing to accept incoming data from the frontend
app.use(express.json());

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

// Add /registrations endpoint
app.get("/registrations", function(req, res) {
// Call getRegistrations on data
  data.getRegistrations(function(registrations) {
  // Return "All registration"
      res.json(registrations);
  });
});

// Add /registrations post endpoint
app.post("/registrations", function(req, res) {
  // Call createRegistration on data
    data.addRegistration(req.body, function() {
      res.send("OK");
    });
  });


//Asking the data layer to remove a registration
// Add a /reg delete endpoint
app.delete("/registration/:code", function(req, res) {
  // This will call deleteReg on the data
  data.deleteRegistration(req.params.code, function() {
    // After successful deletion there will be an OK response to the browser
    res.send("OK");
  });
});


// Start listening on port 3000
app.listen(3000, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Server started.");
});