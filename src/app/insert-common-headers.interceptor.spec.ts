import { TestBed } from '@angular/core/testing';

import { InsertCommonHeadersInterceptor } from './insert-common-headers.interceptor';

describe('InsertCommonHeadersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InsertCommonHeadersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InsertCommonHeadersInterceptor = TestBed.inject(InsertCommonHeadersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
