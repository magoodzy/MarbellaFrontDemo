import { TestBed } from '@angular/core/testing';

import { QAGuard } from './qa.guard';

describe('QAGuard', () => {
  let guard: QAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
