import { TestBed } from '@angular/core/testing';

import { StudentCourseService } from '../../app/services/studentcourse.service';

describe('StudentCourseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentCourseService = TestBed.get(StudentCourseService);
    expect(service).toBeTruthy();
  });
});
