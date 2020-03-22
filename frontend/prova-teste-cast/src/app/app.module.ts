import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Angular MAterial
import {
  MatButtonModule, MatCheckboxModule, MatAutocompleteModule, 
  MatBadgeModule, MatInputModule, MatDatepickerModule, 
  MatFormFieldModule, MatRadioModule, MatSelectModule, 
  MatSliderModule, MatSlideToggleModule, MatMenuModule, 
  MatSidenavModule, MatToolbarModule, MatListModule, 
  MatGridListModule, MatCardModule, MatStepperModule, 
  MatTabsModule, MatExpansionModule, MatButtonToggleModule, 
  MatChipsModule, MatIconModule, MatProgressSpinnerModule, 
  MatProgressBarModule, MatDialogModule, MatTooltipModule, 
  MatSnackBarModule, MatTableModule, MatSortModule, MatPaginatorModule,
  MatNativeDateModule} from '@angular/material';

import { CourseFormComponent } from './courses/course-form/course-form.component';
import { CourseSheetComponent } from './courses/course-sheet/course-sheet.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CategorySheetComponent } from './categories/category-sheet/category-sheet.component';
import { StudentSheetComponent } from './students/student-sheet/student-sheet.component';
import { LoginComponent } from './login/login.component';
import { RedefinirSenhaDialogComponent } from './dialog/redefinir-senha-dialog/redefinir-senha-dialog.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { EmployeeMainMenuComponent } from './menu/employee-main-menu/employee-main-menu.component';
import { AdminMainMenuComponent } from './menu/admin-main-menu/admin-main-menu.component';
import { EmployeeFormComponent } from './employee/employee-form/employee-form.component';
import { StudentMenuComponent } from './menu/student-menu/student-menu.component';
import { EmployeeSheetComponent } from './employee/employee-sheet/employee-sheet.component';
import { StudentCourseAddFormComponent } from './students/mycourses/student-course-add-form/student-course-add-form.component';
import { StudentCourseSheetComponent } from './students/mycourses/student-course-sheet/student-course-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseFormComponent,
    CourseSheetComponent,
    StudentSheetComponent,
    CategoryFormComponent,
    CategorySheetComponent,
    LoginComponent,
    EmployeeMainMenuComponent,
    RedefinirSenhaDialogComponent,
    StudentFormComponent,
    AdminMainMenuComponent,
    EmployeeFormComponent,
    StudentMenuComponent,
    EmployeeSheetComponent,
    StudentCourseAddFormComponent,
    StudentCourseSheetComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, BrowserAnimationsModule, FormsModule,
    HttpClientModule, ReactiveFormsModule,
    //Materials
    MatBadgeModule, MatCheckboxModule, MatCheckboxModule,
    MatButtonModule, MatInputModule, MatAutocompleteModule,
    MatDatepickerModule, MatFormFieldModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatMenuModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatGridListModule, MatCardModule,
    MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule,
    MatTooltipModule, MatSnackBarModule, MatTableModule,
    MatSortModule, MatPaginatorModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
