import { TestBed } from '@angular/core/testing';

import { DoctorProviderService } from './doctor-provider.service';

describe('DoctorProviderService', () => {
  let service: DoctorProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoctorProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
