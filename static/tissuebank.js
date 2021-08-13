"use strict";

class Registrations {
  // Code of animal tissue 
  Animalcode;
  // Species of the animal
  Species;
  // Genetic background of the animal
  GeneticBackground;
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

  constructor(Animalcode, Species, GeneticBackground, Sex, DOB, MethodofEuthanasia, Location, Availability) {
    this.Animalcode = Animalcode;
    this.Species = Species;
    this.GeneticBackground=GeneticBackground;
    this.Sex=Sex;
    this.DOB=DOB;
    this.MethodofEuthanasia=MethodofEuthanasia;
    this.Location=Location;
    this.Availability=Availability;
  }
}