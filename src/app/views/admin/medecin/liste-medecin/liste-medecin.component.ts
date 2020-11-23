import { Medecin } from './../../../../models/medecin';
import { MedecinService } from './../../../../services/medecin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-medecin',
  templateUrl: './liste-medecin.component.html',
  styleUrls: ['./liste-medecin.component.css']
})
export class ListeMedecinComponent implements OnInit {

  
  listeMedecins: Array<Medecin>;
  selectedMedecin: Medecin;
  booleanModif: boolean;
  booleanDelete: boolean;

  constructor(private serviceMedecin : MedecinService) { }

  ngOnInit(): void {
    this.getAllMedecin();
    this.booleanModif = false;
    this.booleanDelete = false;
  }


  getAllMedecin() {
    this.serviceMedecin.findAll().subscribe(
      x => {
        if (!x.error) this.listeMedecins = x.body;
        else this.listeMedecins = [];
      }
    )
  }

//assigne un patient à la variable selected pour modif
  assignedMedecin(medecin: Medecin) {
    this.selectedMedecin = medecin;
  }

  update() {
    this.serviceMedecin.update(this.selectedMedecin).subscribe(
      x => {
        if (!x.error) {
          this.booleanModif = true;
          this.getAllMedecin();
        }
        else this.booleanModif = false;
      }
    )
  }

  deleteById(id: number) {
    this.serviceMedecin.deleteById(id).subscribe(
      x => {
        if (!x.error) this.booleanDelete = true;
        else this.booleanDelete = false;
      }
    )
  }

}
