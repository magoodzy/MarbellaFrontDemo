import { TestBed } from '@angular/core/testing';

import { ApproveTransportationGuard } from './approve-transportation.guard';

describe('ApproveTransportationGuard', () => {
  let guard: ApproveTransportationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ApproveTransportationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
