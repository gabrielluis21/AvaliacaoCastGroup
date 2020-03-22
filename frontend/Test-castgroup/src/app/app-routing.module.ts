import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login-component/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';


const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch: 'full'},
  {path:'home', component: LoginComponent},
  {path:'singUpGym', component: SignUpComponent},
  {path:'mainMenu', component: MenuPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
