import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentsTableComponent} from "../component/table/students/students-table.component";
import {AddStudentFormComponent} from "../component/forms/add-student-form/add-student-form.component";
import {StudentDetailsComponent} from "../component/details/student-details/student-details.component";

const routes: Routes = [
  {path: 'students-list', component: StudentsTableComponent},
  {path: 'students/add', component: AddStudentFormComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

export const routingComponents = [StudentsTableComponent, AddStudentFormComponent, StudentDetailsComponent]
