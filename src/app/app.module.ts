import { AddMedecinComponent } from "./views/admin/medecin/add-medecin/add-medecin.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppRoutingModule } from "./app.routing";
import { ComponentsModule } from "./components/components.module";

import { AppComponent } from "./app.component";

// template component
import { DashboardComponent } from "./dashboard/dashboard.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { TableListComponent } from "./table-list/table-list.component";
import { TypographyComponent } from "./typography/typography.component";
import { IconsComponent } from "./icons/icons.component";
import { MapsComponent } from "./maps/maps.component";
import { NotificationsComponent } from "./notifications/notifications.component";
import { UpgradeComponent } from "./upgrade/upgrade.component";
import { AgmCoreModule } from "@agm/core";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
//general
import { ConnexionComponent } from "./views/connexion/connexion.component";
import { FooterComponent } from "./shared/footer/footer.component";
//patient
import { PatientHomeComponent } from "./views/patient/patient-home/patient-home.component";
import { SidebarPatientComponent } from "./views/patient/sidebar-patient/sidebar-patient.component";
import { PrendreRdvComponent } from "./views/patient/prendre-rdv/prendre-rdv.component";
import { FicheMedicaleComponent } from "./views/patient/fiche-medicale/fiche-medicale.component";
import { GestionProfilComponent } from "./views/patient/gestion-profil/gestion-profil.component";
import { RemplirQuestionnaireComponent } from "./views/patient/remplir-questionnaire/remplir-questionnaire.component";
//medecin
import { MedecinHomeComponent } from "./views/medecin/medecin-home/medecin-home.component";
import { SidebarMedecinComponent } from "./views/medecin/sidebar-medecin/sidebar-medecin.component";
import { PlanningComponent } from "./views/medecin/planning/planning.component";
import { StatistiqueComponent } from "./views/medecin/statistique/statistique.component";
//admin
import { HomeComponent } from "./views/admin/home/home.component";
import { AddPatientComponent } from "./views/admin/patient/add-patient/add-patient.component";
import { ListePatientComponent } from "./views/admin/patient/liste-patient/liste-patient.component";
import { ListeMedecinComponent } from "./views/admin/medecin/liste-medecin/liste-medecin.component";
import { AddFormuleComponent } from "./views/admin/formule/add-formule/add-formule.component";
import { ListeFormuleComponent } from "./views/admin/formule/liste-formule/liste-formule.component";
import { AddGainsapiComponent } from "./views/admin/gainsapi/add-gainsapi/add-gainsapi.component";
import { ListeGainsapiComponent } from "./views/admin/gainsapi/liste-gainsapi/liste-gainsapi.component";
import { SidebarAdminComponent } from "./views/admin/sidebar-admin/sidebar-admin.component";
import { GestionPatientComponent } from "./views/admin/patient/gestion-patient/gestion-patient.component";
import { GestionMedecinComponent } from "./views/admin/medecin/gestion-medecin/gestion-medecin.component";
import { GainComponent } from "./views/medecin/gain/gain.component";
import { AddQuestionnaireComponent } from "./views/admin/questionnaire/add-questionnaire/add-questionnaire.component";
import { GestionQuestionnaireComponent } from "./views/admin/questionnaire/gestion-questionnaire/gestion-questionnaire.component";
import { ListQuestionnaireComponent } from "./views/admin/questionnaire/list-questionnaire/list-questionnaire.component";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: "YOUR_GOOGLE_MAPS_API_KEY",
    }),
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    ConnexionComponent,
    MedecinHomeComponent,
    AddPatientComponent,
    ListePatientComponent,
    ListeMedecinComponent,
    PatientHomeComponent,
    AddFormuleComponent,
    ListeFormuleComponent,
    AddGainsapiComponent,
    ListeGainsapiComponent,
    HomeComponent,
    SidebarAdminComponent,
    GestionPatientComponent,
    GestionMedecinComponent,
    SidebarMedecinComponent,
    SidebarPatientComponent,
    FooterComponent,
    PlanningComponent,
    StatistiqueComponent,
    GainComponent,
    PrendreRdvComponent,
    AddMedecinComponent,
    GestionQuestionnaireComponent,
    AddQuestionnaireComponent,
    FicheMedicaleComponent,
    GestionProfilComponent,
    RemplirQuestionnaireComponent,
    ListQuestionnaireComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
