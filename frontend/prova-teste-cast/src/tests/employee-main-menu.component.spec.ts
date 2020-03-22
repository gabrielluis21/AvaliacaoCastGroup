import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeMainMenuComponent } from '../app/menu/employee-main-menu/employee-main-menu.component';

describe('EmployeeMainMenuComponent', () => {
  let component: EmployeeMainMenuComponent;
  let fixture: ComponentFixture<EmployeeMainMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeMainMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
