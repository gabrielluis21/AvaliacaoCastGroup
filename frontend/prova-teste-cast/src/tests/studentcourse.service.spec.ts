import { TestBed } from '@angular/core/testing';

import { StudentcourseService } from '../app/services/studentcourse.service';

describe('StudentcourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentcourseService = TestBed.get(StudentcourseService);
    expect(service).toBeTruthy();
  });
});
