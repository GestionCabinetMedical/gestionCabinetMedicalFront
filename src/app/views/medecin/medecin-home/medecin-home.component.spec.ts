import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinHomeComponent } from './medecin-home.component';

describe('MedecinHomeComponent', () => {
  let component: MedecinHomeComponent;
  let fixture: ComponentFixture<MedecinHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedecinHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
