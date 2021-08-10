"use strict";

// Import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// The application layer uses tissuebank classes
const tissuebank = require("../tissuebank.js");

// Connect to the database.
var db = new sqlite3.Database("data/tissuebank.db", function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to tissuebank database.");
});