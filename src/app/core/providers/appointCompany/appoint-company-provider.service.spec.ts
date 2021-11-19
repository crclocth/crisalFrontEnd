import { TestBed } from '@angular/core/testing';

import { AppointCompanyProviderService } from './appoint-company-provider.service';

describe('AppointCompanyProviderService', () => {
  let service: AppointCompanyProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointCompanyProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
