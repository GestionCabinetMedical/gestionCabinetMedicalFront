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
    { path: 'prendre-rdv', component: PrendreRdvComponent },
  ]
  },

  {path: 'medecin-home', component: MedecinHomeComponent,
    children: [
      { path: 'planning', component: PlanningComponent },
      { path: 'statistique', component: StatistiqueComponent },
      { path: 'gain', component: GainComponent },
    ]
  },
  {
    path: 'admin-home', component: HomeComponent, //router-outlet
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'gestion-patient', component: GestionPatientComponent },
      { path: 'gestion-medecin', component: GestionMedecinComponent },
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
