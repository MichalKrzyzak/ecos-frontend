import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsListComponent} from './students/students-list/students-list.component';
import {StudentsDetailsComponent} from './students/students-details/students-details.component';
import {StudentsDetailsGuard} from './students/students-details/students-details.guard';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'students', component: StudentsListComponent},
  {path: 'student/:id', component: StudentsDetailsComponent},
  {path: 'student/:id', canActivate: [StudentsDetailsGuard], component: StudentsDetailsComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
