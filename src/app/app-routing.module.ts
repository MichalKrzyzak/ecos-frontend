import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsListComponent} from './students/students-list/students-list.component';
import {StudentsDetailsComponent} from './students/students-details/students-details.component';
import {StudentsDetailsGuard} from './students/students-details/students-details.guard';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {StudentsAddComponent} from './students/students-add/students-add.component';
import {TeachersListComponent} from './teachers/teachers-list/teachers-list.component';
import {TeachersAddComponent} from './teachers/teachers-add/teachers-add.component';
import {TeachersDetailsComponent} from './teachers/teachers-details/teachers-details.component';
import {FosListComponent} from './fos/fos-list/fos-list.component';

const routes: Routes = [
  {path: 'students', component: StudentsListComponent},
  {path: 'student/add', component: StudentsAddComponent}, // TODO guard -> user permission (only admin)
  {path: 'student/:id', component: StudentsDetailsComponent},
  {path: 'student/:id', canActivate: [StudentsDetailsGuard], component: StudentsDetailsComponent},
  {path: 'teachers', component: TeachersListComponent},
  {path: 'teacher/add', component: TeachersAddComponent}, // TODO guard -> user permission (only admin)
  {path: 'teacher/:id', component: TeachersDetailsComponent},
  {path: 'fos', component: FosListComponent},
  {path: 'login', component: LoginComponent, pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: '/'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
