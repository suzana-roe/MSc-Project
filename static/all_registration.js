"use strict";

// This code will get the TBApp
var  TBApp= angular.module("TBApp", []);

// This code will create the registration controller and request for registration data from the backend
TBApp.controller("registrationController", function($scope, $http) {

//This code will get registration data from the backend and display to the frontend 
    $http.get('/registrations').then(function(response) {
        $scope.registrations = response.data;
    });
});

$scope.new_registration= new Registration ("", "", "", "", "", "", "", "");

//this code will send create request to the server
$scope.createRegistration= function() {
    //sending a create request to the server endpoint
    $http.post("/registrations", $scope.new_registration).then(function(response) {
        $scope.new_registration = new Registration ("", "", "", "", "", "", "", "");
        $http.get("/registrations").then(function(response) { 
            $scope.registrations = response.data;
        });
    });
};

//Sends a delete message to the server
$scope.deleteRegistration = function(code) {
    //sends a delete message to /tissue/code
    $http.delete('/registration/' + code).then(function(response) {
        //when request completes, refresh list of 
        $http.get('/registrations').then(function(response) {
        $scope.registrations = response.data;
        });
    });
};