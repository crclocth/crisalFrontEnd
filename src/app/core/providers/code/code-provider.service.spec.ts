import { TestBed } from '@angular/core/testing';

import { CodeProviderService } from './code-provider.service';

describe('CodeProviderService', () => {
  let service: CodeProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
