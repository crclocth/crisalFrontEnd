import { TestBed } from '@angular/core/testing';

import { ExamProviderService } from './exam-provider.service';

describe('ExamProviderService', () => {
  let service: ExamProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
