import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSheetComponent } from '../app/employee/employee-sheet/employee-sheet.component';

describe('EmployeeSheetComponent', () => {
  let component: EmployeeSheetComponent;
  let fixture: ComponentFixture<EmployeeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
