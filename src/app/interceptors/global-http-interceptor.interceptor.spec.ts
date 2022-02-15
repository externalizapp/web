import { TestBed } from '@angular/core/testing';

import { GlobalHttpInterceptor } from './global-http-interceptor.interceptor';

describe('GlobalHttpInterceptorService', () => {
  let service: GlobalHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalHttpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
