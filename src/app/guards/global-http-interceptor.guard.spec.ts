import { TestBed } from '@angular/core/testing';

import { GlobalHttpInterceptorGuard } from './global-http-interceptor.guard';

describe('GlobalHttpInterceptorGuard', () => {
  let guard: GlobalHttpInterceptorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GlobalHttpInterceptorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
