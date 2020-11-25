import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
  { path: 'gestion-patient', title: 'Gestion patient',  icon:'accessible', class: '' },
  { path: 'gestion-medecin', title: 'Gestion medecin',  icon:'local_hospital', class: '' },
  { path: 'gestion-questionnaire', title: 'Gestion questionnaire',  icon:'content_paste', class: '' },
  { path: 'gainsapi', title: 'Consulter les gains', icon:'euro', class: ''}
];
//   icon patient 2nd choix : people_alt
@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {
  menuItems: any[];
  
  constructor() { }

  ngOnInit(): void {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

  disconnect() {
    //méthode de deconnexion
    console.log('deconnexion')
    location.href='';
  }

}
