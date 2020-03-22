import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Users } from 'src/app/models/user';
import { Employees } from 'src/app/models/employee';
import { EmployeeService } from '../../services/employee.service';
import { Router} from '@angular/router';
import { Roles } from '../../models/roles';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  isLinear = false;
  newEmployeeFormGroup: FormGroup;
  newUserFormGroup: FormGroup;

  newUser: Users;
  newEmployee: Employees;

  private roles: Roles = {codigo: 1, role:'Empregado'}

  constructor(private employeeService: EmployeeService,
    private router: Router,
    private signUpService: AuthenticationService,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.newEmployeeFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      hiring: ['', Validators.required],
      job: ['', Validators.required],
      birthday: ['', Validators.required],      
    });
    this.newUserFormGroup = this._formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });
  }

  submitEmployee(){
    this.newEmployee.nome = this.newEmployeeFormGroup.value.name;
    this.newEmployee.cargo = this.newEmployeeFormGroup.value.job;
    this.newEmployee.dataAdmissao = this.newEmployeeFormGroup.value.hiring;
    this.newEmployee.dataNascimento = this.newEmployeeFormGroup.value.birthday;
    
  }
  submitUser(){
    this.newUser.userName = this.newUserFormGroup.value.userName;
    this.newUser.email = this.newUserFormGroup.value.email;
    this.newUser.senha = this.newUserFormGroup.value.password;
    this.newUser.confirmSenha = this.newUserFormGroup.value.confirmPass;
    this.newUser.roles = this.roles;
  }

  saveAll(){
    this.submitEmployee();
    this.submitUser();
    this.signUpService.signUp(this.newUser).subscribe(data=>{
      this.newEmployee.usuario = data;
    });
    this.employeeService.add(this.newEmployee);
    this.router.navigateByUrl("/menu");
  }

}
