import { TestBed } from '@angular/core/testing';

import { AuthGaurdService } from '../../../app/services/auth/auth-gaurd.service';

describe('AuthGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGaurdService = TestBed.get(AuthGaurdService);
    expect(service).toBeTruthy();
  });
});
