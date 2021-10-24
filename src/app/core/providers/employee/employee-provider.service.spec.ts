import { TestBed } from '@angular/core/testing';

import { EmployeeProviderService } from './employee-provider.service';

describe('EmployeeProviderService', () => {
  let service: EmployeeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
