import { TestBed } from '@angular/core/testing';

import { CompanyProviderService } from './company-provider.service';

describe('CompanyProviderService', () => {
  let service: CompanyProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanyProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
