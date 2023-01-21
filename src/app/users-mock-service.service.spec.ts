import { TestBed } from '@angular/core/testing';

import { UsersMockServiceService } from './users-mock-service.service';

describe('UsersMockServiceService', () => {
  let service: UsersMockServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersMockServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
