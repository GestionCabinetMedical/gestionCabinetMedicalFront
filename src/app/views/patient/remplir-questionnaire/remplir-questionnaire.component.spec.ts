import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemplirQuestionnaireComponent } from './remplir-questionnaire.component';

describe('RemplirQuestionnaireComponent', () => {
  let component: RemplirQuestionnaireComponent;
  let fixture: ComponentFixture<RemplirQuestionnaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemplirQuestionnaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemplirQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
