import { Patient } from "app/models/patient";
import { Admin } from "./../models/admin";
import { Medecin } from "app/models/medecin";

export enum Role {
  Admin = "Admin",
  Medecin = "Medecin",
  Patient = "Patient",
}
