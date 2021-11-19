import { TestBed } from '@angular/core/testing';

import { ResultsProviderService } from './results-provider.service';

describe('ResultsProviderService', () => {
  let service: ResultsProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultsProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
