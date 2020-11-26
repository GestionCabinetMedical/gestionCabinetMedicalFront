import { Component, OnInit } from "@angular/core";
import { PatientService } from "app/services/patient.service";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: "/dashboard", title: "Dashboard", icon: "dashboard", class: "" },
  { path: "prendre-rdv", title: "Prendre un rdv", icon: "add_task", class: "" },
  {
    path: "fiche-medicale",
    title: "Fiches médicales",
    icon: "assignment_ind",
    class: "",
  },
  {
    path: "fill-questionnaire",
    title: "Questionnaire",
    icon: "assignment",
    class: "",
  },
  { path: "profil", title: "Mon compte", icon: "account_circle", class: "" },
];

@Component({
  selector: "app-sidebar-patient",
  templateUrl: "./sidebar-patient.component.html",
  styleUrls: ["./sidebar-patient.component.css"],
})
export class SidebarPatientComponent implements OnInit {
  menuItems: any[];

  constructor(private servicePatient: PatientService) {}

  ngOnInit(): void {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }

  disconnect() {
    // méthode de déconnexion
    this.servicePatient.disconnect();
    location.href = "";
  }
}
