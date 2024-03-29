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
exports.getRegistrations = function(callback) {
    // Creating SQL statement for Registration
    var sql = `SELECT * FROM Tissuebank `;

    // This will execute the query and return all registration
    db.all(sql, function(err, rows) {
        // This will check if there is an error within the code
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Registration
        var registrations = [];
        // Loop through rows to create Registration objects
        for (var row of rows) {
            // Create Registration object
            var reg = new tissuebank.Registrations(row.Animalcode, row.Species, row.GeneticBackground, row.Sex, row.DOB, row.MethodofEuthanasia, row.Location, row.Availability);
            // This code will push registrations to array created above
            registrations.push(reg);
        }
        // Execute callback function on registrations 
        callback(registrations);
    });
}; 

//Export getregistration function
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
        var registration = new tissuebank.Registrations(row.Animalcode, row.Species, row.GeneticBackground, row.Sex, row.DOB, row.MethodofEuthanasia, row.Location, row.Availability);
        // Return registration
        callback(registration);
    });
}; 

// Add a tissue to the database
exports.addRegistration = function(registration, callback) {
    // Create SQL insert statement
    var sql = `INSERT INTO Registrations VALUES ('${registration.Animalcode}', '${registration.Species}','${registration.GeneticBackground}','${registration.Sex}','${registration.DOB}','${registration.MethodofEuthanasia}', '${registration.Location}', '${registration.Availability}')`;
    // Execute SQL insert statement
    db.exec(sql, function(err) {
    // Once completed, execute callback function
     callback();
    });
};

//Adding  a deleteRegistration function
// This code will delete a tissue from the database
exports.deleteRegistration = function(Animalcode, callback) {
    // SQL delete statement
    var sql = `DELETE FROM Tissuebank WHERE Animalcode='${code}'`;
    // This code will execute the above SQL delete statement
    db.exec(sql, function(err) {
      // After the SQL statement, a callback function will be executed
        callback();
        });
    };
