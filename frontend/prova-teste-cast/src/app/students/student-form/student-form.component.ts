import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/auth/authentication.service';
import { Users } from 'src/app/models/user';
import { Students } from 'src/app/models/student';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student.service';
import { Roles } from 'src/app/models/roles';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html'
})
export class StudentFormComponent implements OnInit {
  
  isLinear = false;
  newStudentFormGroup: FormGroup;
  newUserFormGroup: FormGroup;

  private roles: Roles = {codigo: 3, role:'Usuario'}

  newUser: Users;
  newStudent: Students;
  constructor(private router: Router,
    private studentService: StudentService,
    private signUpService: AuthenticationService,
    private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.newStudentFormGroup = this._formBuilder.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      
    });
    this.newUserFormGroup = this._formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPass: ['', Validators.required]
    });
  }

  submitStudent(){
    this.newStudent.nome = this.newStudentFormGroup.value.name
    this.newStudent.endereco = this.newStudentFormGroup.value.address
    this.newStudent.telefone = this.newStudentFormGroup.value.phone
    this.newStudent.cidade = this.newStudentFormGroup.value.city
    this.newStudent.dataNacimento = this.newStudentFormGroup.value.birthday;
  }
  
  submitUser(){
    this.newUser.userName = this.newUserFormGroup.value.userName;
    this.newUser.email = this.newUserFormGroup.value.email;
    this.newUser.senha = this.newUserFormGroup.value.password;
    this.newUser.confirmSenha = this.newUserFormGroup.value.confirmPass;
    this.newUser.roles = this.roles;
  }

  saveAll(){
    this.submitUser();
    this.submitStudent();
    this.signUpService.signUp(this.newUser).subscribe(data=>{
      this.newStudent.usuario = data;
    });
    this.studentService.add(this.newStudent);
    this.router.navigateByUrl("/myMenu");
  }
}
