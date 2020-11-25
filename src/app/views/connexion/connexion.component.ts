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
  connexion: ConnexionDto;
  error: boolean;
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

    this.showFormPatient = false;
    this.showFormMedecin = false;
  }

  // méthode de connexion pour patient
  connectPatient(username: string, mdp: string) {
    // appel méthode connection de service Patient
    // si success rediriger vers patient-home

    this.servicePatient.getIdentifiantAndMotDePasse([username, mdp]).subscribe(
      (connexion) => {
        this.error = this.servicePatient.connect(this.connexion);
        if (this.error) {
          this.messageValidation =
            "Bienvenue ! Vous êtes connecté en tant que Patient !";
          // location.href = "patient-home";
          this.router.navigate(["/patient-home"]);
        } else {
          this.messageValidation = "La connexion ne fonctionne pas...";
        }
      },
      (error) => {
        console.log("debug connexionDto : ", error);
        this.messageValidation = "identifiant ou mot de passe invalide.";
      }
    );
  }

  // méthode de connection pour medecin
  connectMedecin(username: string, mdp: string) {
    // appel méthode connection de service Medecin
    // si success rediriger vers medecin-home
    this.serviceMedecin.getIdentifiantAndMotDePasse([username, mdp]).subscribe(
      (connexion) => {
        this.error = !this.serviceMedecin.connect(this.connexion);
        if (!this.error) {
          this.messageValidation =
            "Bienvenue ! Vous êtes connecté en tant que Médecin !";
          // location.href = "medecin-home";
          this.router.navigate(["/medecin-home"]);
        } else {
          this.messageValidation = "La connexion ne fonctionne pas...";
        }
      },
      (error) => {
        console.log("debug connexionDto : ", error);
        this.messageValidation = "identifiant ou mot de passe invalide.";
      }
    );
  }

  // méthode de connection pour admin
  connectAdmin(username: string, mdp: string) {
    // appel méthode connection de service Admin
    // si success rediriger vers admin-home
    this.serviceAdmin.getIdentifiantAndMotDePasse([username, mdp]).subscribe(
      (connexion) => {
        this.error = !this.serviceAdmin.connect(this.connexion);
        if (!this.error) {
          this.messageValidation =
            "Bienvenue ! Vous êtes connecté en tant qu'Administrateur !";
          // location.href = "admin-home";
          this.router.navigate(["/admin-home"]);
        } else {
          this.messageValidation = "La connexion ne fonctionne pas...";
        }
      },
      (error) => {
        console.log("debug connexionDto : ", error);
        this.messageValidation = "identifiant ou mot de passe invalide.";
      }
    );
  }
}
