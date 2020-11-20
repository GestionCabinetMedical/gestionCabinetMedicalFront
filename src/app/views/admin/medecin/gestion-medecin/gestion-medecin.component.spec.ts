import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMedecinComponent } from './gestion-medecin.component';

describe('GestionMedecinComponent', () => {
  let component: GestionMedecinComponent;
  let fixture: ComponentFixture<GestionMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
