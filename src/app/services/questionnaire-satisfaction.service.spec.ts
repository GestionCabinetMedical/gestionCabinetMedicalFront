import { TestBed } from '@angular/core/testing';

import { QuestionnaireSatisfactionService } from './questionnaire-satisfaction.service';

describe('QuestionnaireSatisfactionService', () => {
  let service: QuestionnaireSatisfactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionnaireSatisfactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
