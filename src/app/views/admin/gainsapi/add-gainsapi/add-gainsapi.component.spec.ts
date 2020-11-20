import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGainsapiComponent } from './add-gainsapi.component';

describe('AddGainsapiComponent', () => {
  let component: AddGainsapiComponent;
  let fixture: ComponentFixture<AddGainsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGainsapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGainsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
