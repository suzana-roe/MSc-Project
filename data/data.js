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

// This will Export getRegistrations function
exports.getRegistrations = function(callback) {
    // Creating SQL statement for Registrations
    var sql = `SELECT * FROM Registrations `;

    // This will execute the query and return all registrations
    db.all(sql, function(err, rows) {
        // This will check if there is an error within the code
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Registrations
        var registrations = [];
        // Loop through rows to create Registrations objects
        for (var row of rows) {
            // Create Registrations object
            var reg = new tissuebank.registrations(row.Animalcode, row.Species, row.GeneticBackground, row.Sex, row.DOB, row.MethodofEuthanasia, row.Location, row.Availability);
            // This code will push resgistrations to array created above
            registrations.push(reg);
        }
        // Execute callback function on prescriptions 
        callback(registrations);
    });
};