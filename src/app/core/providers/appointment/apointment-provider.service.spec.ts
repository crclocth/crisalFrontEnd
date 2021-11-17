import { TestBed } from '@angular/core/testing';

import { ApointmentProviderService } from './apointment-provider.service';

describe('ApointmentProviderService', () => {
  let service: ApointmentProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApointmentProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
