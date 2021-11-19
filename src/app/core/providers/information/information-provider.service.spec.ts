import { TestBed } from '@angular/core/testing';

import { InformationProviderService } from './information-provider.service';

describe('InformationProviderService', () => {
  let service: InformationProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
