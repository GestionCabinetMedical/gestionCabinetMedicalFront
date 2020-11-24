
import { FicheMedicaleComponent } from './views/patient/fiche-medicale/fiche-medicale.component';
import { GestionProfilComponent } from './views/patient/gestion-profil/gestion-profil.component';
import { RemplirQuestionnaireComponent } from './views/patient/remplir-questionnaire/remplir-questionnaire.component';
import { GestionQuestionnaireComponent } from './views/admin/questionnaire/gestion-questionnaire/gestion-questionnaire.component';
import { PrendreRdvComponent } from './views/patient/prendre-rdv/prendre-rdv.component';
import { StatistiqueComponent } from './views/medecin/statistique/statistique.component';
import { PlanningComponent } from './views/medecin/planning/planning.component';
import { GestionMedecinComponent } from './views/admin/medecin/gestion-medecin/gestion-medecin.component';
import { GestionPatientComponent } from './views/admin/patient/gestion-patient/gestion-patient.component';
import { ListePatientComponent } from './views/admin/patient/liste-patient/liste-patient.component';
import { HomeComponent } from './views/admin/home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MedecinHomeComponent } from './views/medecin/medecin-home/medecin-home.component';
import { PatientHomeComponent } from './views/patient/patient-home/patient-home.component';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { GainComponent } from './views/medecin/gain/gain.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'patient-home', component: PatientHomeComponent, 
  children : [
    { path: 'prendre-rdv', component: PrendreRdvComponent }, //liste des rdv dispo --> modal prise de rdv
    { path: 'fiche-medicale', component: FicheMedicaleComponent}, // consulter et exporter fiche medicale
    { path: 'profil', component: GestionProfilComponent }, //gestion de profil
    { path: 'fill-questionnaire', component: RemplirQuestionnaireComponent }, //remplir questionnaire -> modal directement
  ]
  },

  {path: 'medecin-home', component: MedecinHomeComponent,
    children: [
      { path: 'planning', component: PlanningComponent }, // consult son planning et confirme les rdv
      { path: 'statistique', component: StatistiqueComponent }, //consult les statistiques perso (consult/maladie, nbre d'heure, ..)
      { path: 'gain', component: GainComponent }, // voir son salaire
    ]
  },

  {path: 'admin-home', component: HomeComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'gestion-patient', component: GestionPatientComponent }, //page gestion de patient
      { path: 'gestion-medecin', component: GestionMedecinComponent }, //page gestion de medecin
      { path: 'gestion-questionnaire', component: GestionQuestionnaireComponent }, //page gestion de questionnaire
    ]
  },
  { path: '', component: AdminLayoutComponent,
    children: [
      {path: '', loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
