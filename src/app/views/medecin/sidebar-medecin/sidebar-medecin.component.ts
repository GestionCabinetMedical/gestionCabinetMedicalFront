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
  { path: '/gestion-patient', title: 'Gestion patient',  icon:'person', class: '' },
  { path: '/gestion-medecin', title: 'Gestion medecin',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar-medecin',
  templateUrl: './sidebar-medecin.component.html',
  styleUrls: ['./sidebar-medecin.component.css']
})
export class SidebarMedecinComponent implements OnInit {

  menuItems: any[];
  constructor() { }

  ngOnInit(): void {
    
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
