import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule, routingComponents} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule} from "@angular/material";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {StudentsService} from "../service/students/students.service";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {AddStudentFormComponent} from '../component/forms/add-student-form/add-student-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatSortModule} from "@angular/material/sort";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSelectModule} from "@angular/material/select";
import {MatTooltipModule} from "@angular/material/tooltip";
import {getPaginatorCustomTooltips} from "../helpers/paginator-intl";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {StudentDetailsComponent} from '../component/details/student-details/student-details.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AddStudentFormComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSortModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatTooltipModule,
    MatSnackBarModule
  ],
  providers: [StudentsService, {
    provide: MatPaginatorIntl, useValue: getPaginatorCustomTooltips()
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
