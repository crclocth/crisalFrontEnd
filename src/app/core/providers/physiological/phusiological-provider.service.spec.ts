import { TestBed } from '@angular/core/testing';

import { PhusiologicalProviderService } from './phusiological-provider.service';

describe('PhusiologicalProviderService', () => {
  let service: PhusiologicalProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhusiologicalProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
