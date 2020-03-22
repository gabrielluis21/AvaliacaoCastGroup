import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSheetComponent } from '../app/courses/courses-sheet/courses-sheet.component';

describe('CoursesSheetComponent', () => {
  let component: CoursesSheetComponent;
  let fixture: ComponentFixture<CoursesSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
