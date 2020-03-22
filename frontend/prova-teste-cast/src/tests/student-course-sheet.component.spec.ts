import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseSheetComponent } from '../app/students/mycourses/student-course-sheet/student-course-sheet.component';

describe('StudentCourseSheetComponent', () => {
  let component: StudentCourseSheetComponent;
  let fixture: ComponentFixture<StudentCourseSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
