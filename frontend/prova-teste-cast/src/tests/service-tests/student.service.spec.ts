import { TestBed } from '@angular/core/testing';

import { StudentService } from '../../app/services/student.service';

describe('StudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentService = TestBed.get(StudentService);
    expect(service).toBeTruthy();
  });
});
