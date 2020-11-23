import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: 'planning', title: 'Planning', icon: 'person', class: '' },
  { path: 'statistique', title: 'Statistique', icon: 'content_paste', class: '' },
  { path: 'gain', title: 'Salaire', icon: 'content_paste', class: '' },
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

  disconnect() {
    //méthode de deconnexion
    location.href='';
  }

}
