import { ConnexionDto } from "app/models/connexionDto";
import { AdminService } from "./../../services/admin.service";
import { Admin } from "./../../models/admin";
import { Component, OnInit } from "@angular/core";
import { Medecin } from "app/models/medecin";
import { Patient } from "app/models/patient";
import { MedecinService } from "app/services/medecin.service";
import { PatientService } from "app/services/patient.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-connexion",
  templateUrl: "./connexion.component.html",
  styleUrls: ["./connexion.component.scss"],
})
export class ConnexionComponent implements OnInit {
  messageValidation: string;

  medecin: Medecin;
  patient: Patient;
  admin: Admin;

  showFormPatient: boolean;
  showFormMedecin: boolean;
  showFormAdmin: boolean;

  constructor(
    private router: Router,
    private servicePatient: PatientService,
    private serviceMedecin: MedecinService,
    private serviceAdmin: AdminService
  ) {}

  ngOnInit(): void {
    this.patient = new Patient();
    this.medecin = new Medecin();
    this.admin = new Admin();

    this.showFormPatient = false;
    this.showFormMedecin = false;
    this.showFormAdmin = false;
  }

  // méthode de connexion pour patient
  connectPatient() {
    // appel méthode connection de service Patient
    // si success rediriger vers patient-home
    console.log(this.patient.identifiant, this.patient.motDePasse);
    const identifiant = this.patient.identifiant;
    const mdp = this.patient.motDePasse;
    this.servicePatient.getIdentifiantAndMotDePasse(identifiant, mdp);
    if (identifiant != null) {
      if (mdp != null) {
        this.messageValidation =
          "Vous êtes maitenant connecté à votre espace Patient !";
        localStorage.setItem("connectedPatient", JSON.stringify(identifiant));
        // this.router.navigate(["/patient-home"]);
        location.href = "/patient-home";
      } else {
        console.error("Erreur connectPatient: mdp null.");
      }
    } else {
      console.error("Erreur connectPatient: identifiant et mdp null.");
      this.messageValidation = "Identifiant ou mot de passe invalide.";
    }
  }

  // méthode de connection pour medecin
  connectMedecin() {
    // appel méthode connection de service Medecin
    // si success rediriger vers medecin-home
    console.log(this.medecin.identifiant, this.medecin.motDePasse);
    const identifiant = this.medecin.identifiant;
    const mdp = this.medecin.motDePasse;
    this.serviceMedecin.getIdentifiantAndMotDePasse(identifiant, mdp);
    if (identifiant != null) {
      if (mdp != null) {
        this.messageValidation =
          "Vous êtes maitenant connecté à votre espace Medecin !";
        localStorage.setItem("connectedMedecin", JSON.stringify(identifiant));
        this.router.navigate(["/medecin-home"]);
      } else {
        console.error("Erreur connectMedecin: mdp null.");
      }
    } else {
      console.error("Erreur connectMedecin: identifiant et mdp null.");
      this.messageValidation = "Identifiant ou mot de passe invalide.";
    }
  }

  // méthode de connection pour admin
  connectAdmin() {
    // appel méthode connection de service Admin
    // si success rediriger vers admin-home
    console.log(this.admin.username, this.admin.password);
    const identifiant = this.admin.username;
    const mdp = this.admin.password;
    this.serviceAdmin.getIdentifiantAndMotDePasse(identifiant, mdp);
    if (identifiant != null) {
      if (mdp != null) {
        this.messageValidation =
          "Vous êtes maitenant connecté en tant qu'Administrateur !";
        localStorage.setItem("connectedAdmin", JSON.stringify(identifiant));
        this.router.navigate(["/admin-home"]);
        // location.href = "/admin-home";
      } else {
        console.error("Erreur connectAdmin: mdp null.");
      }
    } else {
      console.error("Erreur connectAdmin: identifiant et mdp null.");
      this.messageValidation = "Identifiant ou mot de passe invalide.";
    }
  }
}
