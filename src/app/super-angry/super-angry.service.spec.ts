import { TestBed, inject } from '@angular/core/testing';

import { SuperAngryService } from './super-angry.service';

describe('SuperAngryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SuperAngryService]
    });
  });

  it('should be created', inject([SuperAngryService], (service: SuperAngryService) => {
    expect(service).toBeTruthy();
  }));
});
