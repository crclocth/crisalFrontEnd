import { TestBed } from '@angular/core/testing';

import { BatteryProviderService } from './battery-provider.service';

describe('BatteryProviderService', () => {
  let service: BatteryProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatteryProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
