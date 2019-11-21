import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsTableComponent} from "../component/table/students/students-table.component";
import {AddStudentFormComponent} from "../component/forms/add-student-form/add-student-form.component";

const routes: Routes = [
  { path: 'students-list', component: StudentsTableComponent},
  { path: 'students-list/add', component: AddStudentFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [StudentsTableComponent, AddStudentFormComponent]
