import { MedecinService } from './../../../../services/medecin.service';
import { Component, OnInit } from '@angular/core';
import { Medecin } from 'app/models/medecin';

@Component({
  selector: 'app-add-medecin',
  templateUrl: './add-medecin.component.html',
  styleUrls: ['./add-medecin.component.css']
})
export class AddMedecinComponent implements OnInit {

  newMedecin: Medecin;
  booleanResponse: boolean;
  constructor(private serviceMedecin: MedecinService) { }

  ngOnInit(): void {
    this.newMedecin = new Medecin();
  }

  create() {
    this.serviceMedecin.create(this.newMedecin).subscribe(
      x => {
        if (!x.error) this.booleanResponse = true;
        else this.booleanResponse = false;
      })
  }
}
