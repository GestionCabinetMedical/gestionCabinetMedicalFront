import { ReservationService } from './../../../services/reservation.service';
import { Consultation } from './../../../models/consultation';
import { MedecinService } from './../../../services/medecin.service';
import { Component, OnInit } from '@angular/core';
import { Reservation } from 'app/models/reservation';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  //objet d'affichae liste resa
  show_resa: boolean;
  listeConsult: Array<Consultation>;
  alertAcceptSuccess: boolean;
  alertAcceptFail: boolean;

  //objet d'affichage planning
  planning : Array<Consultation>;
  dateToday: Date;
  consultToday: Array<Consultation>;
  date2 : Date;
  consultDate2 : Array<Consultation>;
  date3:Date;
  consultDate3 : Array<Consultation>;
  date4 : Date;
  consultDate4: Array<Consultation>;
  date5:Date;
  consultDate5: Array<Consultation>;

  alertDeleteSuccess: boolean;
  alertDeleteFail: boolean;

  selectedDate : Date;
  identifiantMed: String;

  constructor(private serviceMedecin: MedecinService,
    private serviceReservation: ReservationService) { }

  ngOnInit(): void {
    //attribuer patient avec local storage
    this.identifiantMed = JSON.parse(localStorage.getItem('connectedUser'));
    
    this.show_resa = false;
    this.listeConsult = new Array<Consultation>();

    this.alertAcceptSuccess = false;
    this.alertAcceptFail = false;

    this.alertDeleteSuccess = false;
    this.alertDeleteFail = false;
    this.dateToday = new Date();
    this.consultToday = new Array<Consultation>();
    this.date2 = new Date();
    this.consultDate2 = new Array<Consultation>();
    this.date3 = new Date();
    this.consultDate3 = new Array<Consultation>();
    this.date4 = new Date();
    this.consultDate4 = new Array<Consultation>();
    this.date5 = new Date();
    this.consultDate5 = new Array<Consultation>();
    this.selectedDate = new Date();
    this.getPlanning();
  }



  getResa() {
    this.show_resa = true;
    this.serviceMedecin.consulterResa(this.identifiantMed).subscribe(
      x => {
        if (!x.error) this.listeConsult = x.body;
        else {
          this.listeConsult = [];
          console.log('erreur getResa() (resa false) ');
        }
      }
    )
  }

  accepterResa(resa: Reservation) {
    this.serviceMedecin.accepterResa(resa).subscribe(
      x => {
        if (!x.error) {
          this.alertAcceptSuccess = true;
          this.getResa();
          this.getPlanning();
        }
        else this.alertAcceptFail = true;
      }
    )
  }

  supprimerResa(idResa: number) {
    this.serviceReservation.deleteById(idResa).subscribe(
      x => {
        if (!x.error) {
          this.alertDeleteSuccess = true;
          this.getResa();
        }
        else this.alertDeleteFail = true;
      }
    )
  }

  selectDate(){
    this.dateToday = this.selectedDate;
    this.getPlanning();
  }

  getPlanning(){
  this.incrementeDate();

    this.serviceMedecin.consulterPlanning(this.identifiantMed).subscribe(
      x => {
        if (!x.error) this.planning = x.body;
        else this.planning = [];
      }
    )

      // A TRAVAILLER
    // this.serviceMedecin.consulterPlanningByDate(this.identifiantMed,this.dateToday.getFullYear(), this.dateToday.getMonth(),this.dateToday.getDate()).subscribe(
    //   x => {
    //     if (!x.error) {
    //       x.body.slice().forEach(element => {
    //         if(element.reservation.dateReservation.substring(8,10) == this.dateToday.getDate())  this.consultToday.push(element);
    //         if(element.reservation.dateReservation.substring(8,10) == this.date2.getDate())  this.consultDate2.push(element);
    //         if(element.reservation.dateReservation.substring(8,10) == this.date3.getDate())  this.consultDate3.push(element);
    //         if(element.reservation.dateReservation.substring(8,10) == this.date4.getDate())  this.consultDate4.push(element);
    //         if(element.reservation.dateReservation.substring(8,10) == this.date5.getDate())  this.consultDate5.push(element);
    //       });
    //       }
    //     else {
    //           this.planning = [];
    //           console.log('erreur getPlanning() (resa true) ');
    //   }
    //   }
    // )
  }

  incrementeDate(){
    this.date2.setDate(this.selectedDate.getDate()+1);
    this.date3.setDate(this.selectedDate.getDate()+2);
    this.date4.setDate(this.selectedDate.getDate()+3);
    this.date5.setDate(this.selectedDate.getDate()+4);
  }

  getNextWeek(){
    this.consultToday = new Array<Consultation>();
    this.consultDate2 = new Array<Consultation>();
    this.consultDate3 = new Array<Consultation>();
    this.consultDate4 = new Array<Consultation>();
    this.consultDate5 = new Array<Consultation>();

    this.dateToday.setDate(this.date5.getDate()+7);
    this.getPlanning();
  }

  getPastWeek(){
    this.consultToday = new Array<Consultation>();
    this.consultDate2 = new Array<Consultation>();
    this.consultDate3 = new Array<Consultation>();
    this.consultDate4 = new Array<Consultation>();
    this.consultDate5 = new Array<Consultation>();

    this.dateToday.setDate(this.dateToday.getDate()-7);
    this.getPlanning();
  }
}
