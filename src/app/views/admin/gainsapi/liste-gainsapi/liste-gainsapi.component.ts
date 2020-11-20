import { GainsAppliService } from './../../../../services/gains-appli.service';
import { Component, OnInit } from '@angular/core';
import { GainsAppli } from 'app/models/gainsAppli';

@Component({
  selector: 'app-liste-gainsapi',
  templateUrl: './liste-gainsapi.component.html',
  styleUrls: ['./liste-gainsapi.component.css']
})
export class ListeGainsapiComponent implements OnInit {

  listeGains:Array<GainsAppli>;

  constructor(private serviceGainsApi:GainsAppliService) { }

  ngOnInit(): void {
    this.getAllGainsApi();
  }

  getAllGainsApi(){
    this.serviceGainsApi.findAll().subscribe(
      x => {
        if(!x.error) this.listeGains=x.body;
        else this.listeGains = [];
      }
    );
  }

}
