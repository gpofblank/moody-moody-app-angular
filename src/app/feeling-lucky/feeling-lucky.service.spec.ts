import { TestBed, inject } from '@angular/core/testing';

import { FeelingLuckyService } from './feeling-lucky.service';

describe('FeelingLuckyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeelingLuckyService]
    });
  });

  it('should be created', inject([FeelingLuckyService], (service: FeelingLuckyService) => {
    expect(service).toBeTruthy();
  }));
});
