import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeGainsapiComponent } from './liste-gainsapi.component';

describe('ListeGainsapiComponent', () => {
  let component: ListeGainsapiComponent;
  let fixture: ComponentFixture<ListeGainsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeGainsapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeGainsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
