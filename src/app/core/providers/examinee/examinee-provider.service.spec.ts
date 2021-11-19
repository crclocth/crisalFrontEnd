import { TestBed } from '@angular/core/testing';

import { ExamineeProviderService } from './examinee-provider.service';

describe('ExamineeProviderService', () => {
  let service: ExamineeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamineeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
