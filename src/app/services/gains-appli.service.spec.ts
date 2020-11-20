import { TestBed } from '@angular/core/testing';

import { GainsAppliService } from './gains-appli.service';

describe('GainsAppliService', () => {
  let service: GainsAppliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GainsAppliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
