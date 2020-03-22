import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentSheetComponent } from '../app/students/student-sheet/student-sheet.component';

describe('StudentSheetComponent', () => {
  let component: StudentSheetComponent;
  let fixture: ComponentFixture<StudentSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
