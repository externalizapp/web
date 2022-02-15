import { TestBed } from '@angular/core/testing';

import { ResultsGuardGuard } from './results-guard.guard';

describe('ResultsGuardGuard', () => {
  let guard: ResultsGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResultsGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
