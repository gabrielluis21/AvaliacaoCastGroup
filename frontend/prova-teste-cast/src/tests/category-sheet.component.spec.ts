import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorySheetComponent } from '../app/categories/category-sheet/category-sheet.component';

describe('CategorySheetComponent', () => {
  let component: CategorySheetComponent;
  let fixture: ComponentFixture<CategorySheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorySheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorySheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
