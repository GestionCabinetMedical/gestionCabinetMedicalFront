import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFormuleComponent } from './liste-formule.component';

describe('ListeFormuleComponent', () => {
  let component: ListeFormuleComponent;
  let fixture: ComponentFixture<ListeFormuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFormuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFormuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
