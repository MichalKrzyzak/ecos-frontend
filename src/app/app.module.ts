import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StudentsListComponent} from './students/students-list/students-list.component';
import {StudentsDetailsComponent} from './students/students-details/students-details.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentsListComponent,
    StudentsDetailsComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
