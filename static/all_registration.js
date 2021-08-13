"use strict";


// This code will get the PDApp
var  TBApp= angular.module("TBApp", []);

// This code will create the controller and request for data from the backend
TBApp.controller("registrationController", function($scope, $http) {

//This code will get data from the backend and display to the frontend 
    $http.get('/registration').then(function(response) {
      $scope.registration = response.data;
    });
});