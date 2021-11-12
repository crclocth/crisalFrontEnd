import { TestBed } from '@angular/core/testing';

import { LaboratoryProviderService } from './laboratory-provider.service';

describe('LaboratoryProviderService', () => {
  let service: LaboratoryProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaboratoryProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
