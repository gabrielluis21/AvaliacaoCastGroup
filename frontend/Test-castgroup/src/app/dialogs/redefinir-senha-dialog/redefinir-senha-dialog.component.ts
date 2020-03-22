import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DialogData } from '../dialog-data';

@Component({
  template: `
  <h1 mat-dialog-title>Redefinção de Senha</h1>
  <mat-dialog-content>
    <form [formGroup]="form" (ngSubmit)="submit(form)" class="formularios">
      <mat-form-field>
        <input matInput formControlName="email" type="text" placeholder="E-mail">
      </mat-form-field>
      <mat-form-field>
        <input matInput formControlName="novaSenha" placeholder="Senha" [type]="hide ? 'password' : 'text'">
        <mat-icon matSuffix (click)="hide = !hide">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>
      </mat-form-field>
      <mat-form-field>
        <input matInput formControlName="confSenha" placeholder="Confirmar senha">
      </mat-form-field>
    </form>
  </mat-dialog-content>
  <mat-dialog-actions>
    <button mat-raised-button color="primary" type="submit">Redefinir</button>
    <button mat-button (click)="closeRedfinirDialog()">Fechar</button>
  </mat-dialog-actions>
`
})
export class RedefinirSenhaDialogComponent implements OnInit {

  form: FormGroup;

  hide=true;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<RedefinirSenhaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit(){
    this.form = this.formBuilder.group({
      email: this.data.email,
      senha: this.data.senha,
      confSenha: this.data.confSenha
    });
  }

  closeRedfinirDialog(){
    this.dialogRef.close();
  }

  submit(form){
    this.dialogRef.close(`${form.value.email}`);
  }

}