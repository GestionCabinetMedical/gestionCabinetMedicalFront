import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs';
import { PatientService } from './../../../services/patient.service';
import { Consultation } from 'app/models/consultation';
import { ConsultationService } from './../../../services/consultation.service';
import { ReservationService } from './../../../services/reservation.service';
import { Reservation } from './../../../models/reservation';
import { MedecinService } from './../../../services/medecin.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'app/models/medecin';
import { HeureRdv } from 'app/enum/heure-rdv';
import { Patient } from 'app/models/patient';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.component.html',
  styleUrls: ['./prendre-rdv.component.css']
})
export class PrendreRdvComponent implements OnInit {



  //objet pour recherche par specialite 
  specialiteMedecin: String;
  listeMedecinBySpecialite: Array<Medecin>;
  showRechBySpec: boolean;
  // objet pour recherch par nom
  nomMedecin: String;
  listeMedecinByNom: Array<Medecin>;
  showRechByNom: boolean;

  //objet medecin choisi
  selectedMedecin: Medecin;

  //objet patient concerné
  selectedPatient: Patient;
  reservationPatient: Array<Reservation>;

  // objet pour selection date
  showDate: boolean;
  selectedDate: Date;
  dateToString: string;
  date2: Date;
  date3: Date;
  date4: Date;
  date5: Date;

  //liste enum de rdv dispo
  showResa: boolean;
  listeResaDispo: Array<HeureRdv>;

  //objet pour création resa
  newResa: Reservation;
  newConsult: Consultation;

  //objet pour carte
  showCarte: boolean;

  //boolean pour alert success ou fail création resa
  AddResaSuccess: boolean;
  AddResaFail: boolean;

  constructor(
    private serviceMedecin: MedecinService,
    private serviceReservation: ReservationService,
    private serviceConsultation: ConsultationService,
    private servicePatient: PatientService) { }


  ngOnInit(): void {
    //attribuer patient avec local storage
    this.selectedPatient.identifiant = JSON.parse(localStorage.getItem('connectedUser'));

    //initialisation variable
    this.specialiteMedecin = new String();
    this.nomMedecin = new String();
    this.newResa = new Reservation();
    this.newConsult = new Consultation();
    this.listeResaDispo = new Array<HeureRdv>();
    this.selectedDate = new Date();
    this.reservationPatient = new Array<Reservation>();
    this.selectedPatient = new Patient();
    //initialitation booleen en false
    this.AddResaSuccess = false;
    this.AddResaFail = false;
    this.showRechBySpec = false;
    this.showRechByNom = false;
    this.showResa = false;
    this.showDate = false;
    this.showCarte = false;

    this.findPatientByIdentifiant();
  }

  findPatientByIdentifiant() {
    this.servicePatient.findByIdentifiant(this.selectedPatient.identifiant).subscribe(  
      x => {
        if (!x.error) {
          this.selectedPatient = x.body;
        }
        else console.log('erreur recherche patient !');
      }
    )
  }


  //recherche medecin par specialite
  findMedecinBySpecialite() {
    this.serviceMedecin.findBySpecialite(this.specialiteMedecin).subscribe(
      x => {
        if (!x.error) {
          this.listeMedecinBySpecialite = x.body;
          this.showRechBySpec = true;
          this.showRechByNom = false;
        }
        else this.listeMedecinBySpecialite = [];
      }
    )
  }

  findMedecinByNom() {
    this.serviceMedecin.findByNom(this.nomMedecin).subscribe(
      x => {
        if (!x.error) {
          this.listeMedecinByNom = x.body;
          this.showRechByNom = true;
          this.showRechBySpec = false;
        }
        else this.listeMedecinByNom = [];
      }
    )
  }

  selectRdv(medecin: Medecin) {
    this.selectedMedecin = medecin;
    this.showDate = true;
  }

  voirCarte(medecin: Medecin) {
    this.selectedMedecin = medecin;
    this.showCarte = true;
  }

  selectDate() {
    //attribuer les valeurs des dates 2 à 5 suivant selectedDate
    this.showResa = true;
    this.getResaDispo();
  }


  // changer idMedecin
  getResaDispo() {
    this.serviceReservation.consulterPlanning(this.selectedDate, this.selectedMedecin.idMedecin).subscribe(
      x => {
        if (!x.error) this.listeResaDispo = x.body;
        else this.listeResaDispo = [];
      }
    )
  }

  createReservation(heureRdv: HeureRdv) {
    this.newResa.heureRdv = heureRdv;
    this.newResa.dateReservation = this.selectedDate;
    this.newConsult.reservation = this.newResa;
    //creation consult et resa
    this.serviceConsultation.createConsultAndResa(this.newConsult).subscribe(
      x => {
        if (!x.error) {
          this.AddResaSuccess = true;
          //ajout de la consult au medecin et update medecin
          this.selectedMedecin.consultations.push(x.body);
          this.serviceMedecin.update(this.selectedMedecin).subscribe();
          
          //lui assigner la nouvelle resa et update patient
          this.selectedPatient.reservations.push(x.body.reservation);
          this.servicePatient.update(this.selectedPatient).subscribe();
          this.getResaDispo();
        }
        else this.AddResaFail = true;
      }
    )
  }


}
