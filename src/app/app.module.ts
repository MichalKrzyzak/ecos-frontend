import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentsListComponent} from './students/students-list/students-list.component';
import {StudentsDetailsComponent} from './students/students-details/students-details.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule
} from '@angular/material';
import {LoginComponent} from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentsAddComponent} from './students/students-add/students-add.component';
import {FosAssignDialogComponent} from './fos/fos-assign-dialog/fos-assign-dialog.component';
import { TeachersAddComponent } from './teachers/teachers-add/teachers-add.component';
import { TeachersListComponent } from './teachers/teachers-list/teachers-list.component';
import { TeachersDetailsComponent } from './teachers/teachers-details/teachers-details.component';
import { FosListComponent } from './fos/fos-list/fos-list.component';
import { FosAddComponent } from './fos/fos-add/fos-add.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    HomeComponent,
    LoginComponent,
    StudentsAddComponent,
    FosAssignDialogComponent,
    TeachersAddComponent,
    TeachersListComponent,
    TeachersDetailsComponent,
    FosListComponent,
    FosAddComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatExpansionModule,
    MatDialogModule,
    MatOptionModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
  ],
  entryComponents: [
    FosAssignDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
