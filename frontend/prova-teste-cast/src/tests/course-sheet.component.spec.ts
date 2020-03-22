import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSheetComponent } from '../app/courses/course-sheet/course-sheet.component';

describe('CourseSheetComponent', () => {
  let component: CourseSheetComponent;
  let fixture: ComponentFixture<CourseSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
