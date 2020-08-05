import { TestBed, inject } from '@angular/core/testing';

import { CheerMeUpService } from './cheer-me-up.service';

describe('CheerMeUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheerMeUpService]
    });
  });

  it('should be created', inject([CheerMeUpService], (service: CheerMeUpService) => {
    expect(service).toBeTruthy();
  }));
});
