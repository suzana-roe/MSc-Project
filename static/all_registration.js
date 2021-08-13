"use strict";

// This code will get the PDApp
var  TBApp= angular.module("TBApp", []);

// This code will create the patient controller and request for patient data from the backend
TBApp.controller("registrationController", function($scope, $http) {

//This code will get patient data from the backend and display to the frontend 
    $http.get('/registrations').then(function(response) {
        $scope.registrations = response.data;
    });
});
