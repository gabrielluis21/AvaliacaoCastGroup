import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material';
import { RedefinirSenhaDialogComponent } from '../dialog/redefinir-senha-dialog/redefinir-senha-dialog.component';
import { Users } from '../models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  //http: LoginService;

  loginForm: FormGroup;

  invalidLogin= false;

  dialogRef: MatDialogRef<RedefinirSenhaDialogComponent>;

  usuario: Users;


  constructor(private router: Router, private loginService: AuthenticationService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: '',
      senha: ''
    });
  }

  openRedefinirSenha(){
    this.dialogRef = this.dialog.open(RedefinirSenhaDialogComponent,{
      width:'390',
      height:'390',
      data:{email: '', senha:'', confSenha:'', nome:''}
    });
  }

  checkLogin() {
    (this.loginService.authenticate(this.loginForm.value.email,
       this.loginForm.value.senha).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );
  }
}
