import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { RedefinirSenhaDialogComponent } from '../dialogs/redefinir-senha-dialog/redefinir-senha-dialog.component';

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
 // http: LoginService;

  loginForm: FormGroup;

  hide=true;

  dialogRef: MatDialogRef<RedefinirSenhaDialogComponent>;

  constructor(private formBuilder: FormBuilder,
              private dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      senha: ''
    });
  }

  openRedefinirSenha(){
    this.dialogRef = this.dialog.open(RedefinirSenhaDialogComponent,{
      width:'400',
      height:'390',
      data:{email: '', senha:'', confSenha:'', nome:''}
    });
  }

  submir(form){
     
  }

}