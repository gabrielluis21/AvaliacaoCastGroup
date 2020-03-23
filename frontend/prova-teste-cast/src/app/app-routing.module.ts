import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeMainMenuComponent } from './menu/employee-main-menu/employee-main-menu.component';
import { AdminMainMenuComponent } from './menu/admin-main-menu/admin-main-menu.component';
import { StudentMenuComponent } from './menu/student-menu/student-menu.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { LoginComponent } from './login/login.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { AuthGaurdService } from './services/auth/auth-gaurd.service';

const routes: Routes = [
    
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: LoginComponent},
  {path:'signUp', component: StudentFormComponent},
  {path:'newEmployee', component: EmployeeFormComponent},
  {path:'mainMenu', component: AdminMainMenuComponent},
  {path:'menu', component: EmployeeMainMenuComponent},
  {path:'myMenu', component: StudentMenuComponent}
  //{path:'mainMenu', component: AdminMainMenuComponent, canActivate: [AuthGaurdService]},
  //{path:'menu', component: EmployeeMainMenuComponent, canActivate: [AuthGaurdService]},
  //{path:'myMenu', component: StudentMenuComponent, canActivate: [AuthGaurdService]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
