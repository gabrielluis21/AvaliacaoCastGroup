import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedefinirSenhaDialogComponent } from '../app/dialogs/redefinir-senha-dialog/redefinir-senha-dialog.component';

describe('RedefinirSenhaDialogComponent', () => {
  let component: RedefinirSenhaDialogComponent;
  let fixture: ComponentFixture<RedefinirSenhaDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedefinirSenhaDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedefinirSenhaDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
