import { TestBed } from '@angular/core/testing';

import { CertificationProviderService } from './certification-provider.service';

describe('CertificationProviderService', () => {
  let service: CertificationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
