import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseAddFormComponent } from '../app/students/mycourses/student-course-add-form/student-course-add-form.component';

describe('StudentCourseAddFormComponent', () => {
  let component: StudentCourseAddFormComponent;
  let fixture: ComponentFixture<StudentCourseAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentCourseAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCourseAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
