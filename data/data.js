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

// This will Export getRegistration function
exports.getRegistration = function(callback) {
    // Creating SQL statement for Registration
    var sql = `SELECT * FROM Tissuebank `;

    // This will execute the query and return all registration
    db.all(sql, function(err, rows) {
        // This will check if there is an error within the code
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Registration
        var registration = [];
        // Loop through rows to create Registration objects
        for (var row of rows) {
            // Create Registration object
            var reg = new tissuebank.Registration(row.Animalcode, row.Species, row.GeneticBackground, row.Sex, row.DOB, row.MethodofEuthanasia, row.Location, row.Availability);
            // This code will push resgistrations to array created above
            registration.push(reg);
        }
        // Execute callback function on registrations 
        callback(registration);
    });
};

// Export getregistration function
exports.getRegistration = function(code, callback) {
    // Create SQL statement
    var sql = `
        SELECT * FROM Tissuebank
        WHERE Animalcode = '${code}'`;
    // Execute query. Only one row returned.
    db.get(sql, function(err, row) {
        if (err) {
            return console.error(err.message);
        }
        // Create a registration object
        var registration = new tissuebank.Registration(row.Animalcode, row.Species, row.GeneticBackground, row.Sex, row.DOB, row.MethodofEuthanasia, row.Location, row.Availability);
        // Return registration
        callback(registration);
    });
};

