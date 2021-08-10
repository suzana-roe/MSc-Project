"use strict";

exports.Registration = class {
  // Code of animal tissue 
  Animalcode;
  // Species of the animal
  Species;
  // Genetic background of the animal
  Geneticbackground;
  // Gender of the animal
  Sex;
  // Date of birth of the animal
  DOB;
  // Method of Euthanasia of the animal
  MethodofEuthanasia;
  // Location of the research lab
  Location;
  // Availability of the archived tissue
  Availability = [];

  constructor(Animalcode, Species, Geneticbackground, Sex, DOB, MethodofEuthanasia, Location, Availability) {
    this.Animalcode = Animalcode;
    this.Species = Species;
    this.Geneticbackground=Geneticbackground;
    this.Sex=Sex;
    this.DOB=DOB;
    this.MethodofEuthanasia=MethodofEuthanasia;
    this.Location=Location;
    this.Availability=Availability;
  }
}