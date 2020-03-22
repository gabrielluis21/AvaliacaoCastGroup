import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Angular MAterial
import { MatBadgeModule } from '@angular/material/badge/badge-module';
import { MatCheckboxModule } from '@angular/material/checkbox/checkbox-module';
import { MatButtonModule } from '@angular/material/button/button-module';
import { MatInputModule } from '@angular/material/input/input-module';
import { MatAutocompleteModule } from '@angular/material/autocomplete/autocomplete-module';
import { MatDatepickerModule } from '@angular/material/datepicker/datepicker-module';
import { MatDatepickerToggle } from '@angular/material/datepicker/datepicker-toggle';
import { MatFormFieldModule } from '@angular/material/form-field/form-field-module';
import { MatRadioModule} from '@angular/material/radio/radio-module';
import { MatSelectModule } from '@angular/material/select/select-module';
import { MatSliderModule } from '@angular/material/slider/slider-module';
import { MatSlideToggleModule } from '@angular/material/slide-toggle/slide-toggle-module';
import { MatMenuModule } from '@angular/material/menu/menu-module';
import { MatSidenavModule } from '@angular/material/sidenav/sidenav-module';
import { MatToolbarModule } from '@angular/material/toolbar/toolbar-module';
import { MatListModule } from '@angular/material/list/list-module';
import { MatGridListModule } from '@angular/material/grid-list/grid-list-module';
import { MatCardModule } from '@angular/material/card/card-module';
import { MatStepperModule } from '@angular/material/stepper/stepper-module';
import { MatTabsModule } from '@angular/material/tabs/tabs-module';
import { MatExpansionModule } from '@angular/material/expansion/expansion-module';
import { MatButtonToggleModule } from '@angular/material/button-toggle/button-toggle-module';
import { MatChipsModule } from '@angular/material/chips/chips-module';
import { MatIconModule } from '@angular/material/icon/icon-module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner/progress-spinner-module';
import { MatProgressBarModule } from '@angular/material/progress-bar/progress-bar-module';
import { MatDialogModule } from '@angular/material/dialog/dialog-module';
import { MatTooltipModule } from '@angular/material/tooltip/tooltip-module';
import { MatSnackBarModule } from '@angular/material/snack-bar/snack-bar-module';
import { MatTableModule } from '@angular/material/table/table-module';
import { MatSortModule } from '@angular/material/sort/sort-module';
import { MatPaginatorModule } from '@angular/material/paginator/paginator-module';
import { MatNativeDateModule } from '@angular/material/core';


import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { LoginComponent } from './login-component/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RedefinirSenhaDialogComponent } from './dialogs/redefinir-senha-dialog/redefinir-senha-dialog.component';
import { CoursesFormComponent } from './courses/courses-form/courses-form.component';
import { StudentFormComponent } from './students/student-form/student-form.component';
import { CategoryFormComponent } from './categories/category-form/category-form.component';
import { CoursesSheetComponent } from './courses/courses-sheet/courses-sheet.component';
import { StudentSheetComponent } from './students/student-sheet/student-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPrincipalComponent,
    LoginComponent,
    SignUpComponent,
    RedefinirSenhaDialogComponent,
    CoursesFormComponent,
    FormsModule,
    StudentFormComponent,
    StudentSheetComponent,
    CoursesSheetComponent,
    CategoryFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

    //Material
    MatBadgeModule, MatCheckboxModule, MatDatepickerToggle,
    MatButtonModule, MatInputModule, MatAutocompleteModule,
    MatDatepickerModule, MatFormFieldModule, MatRadioModule,
    MatSelectModule, MatSliderModule, MatSlideToggleModule,
    MatMenuModule, MatSidenavModule, MatToolbarModule,
    MatListModule, MatGridListModule, MatCardModule,
    MatStepperModule, MatTabsModule, MatExpansionModule,
    MatButtonToggleModule, MatChipsModule, MatIconModule,
    MatProgressSpinnerModule, MatProgressBarModule, MatDialogModule,
    MatTooltipModule, MatSnackBarModule, MatTableModule,
    MatSortModule, MatPaginatorModule, 
    MatNativeDateModule 
  ],
  entryComponents:[
    RedefinirSenhaDialogComponent,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
