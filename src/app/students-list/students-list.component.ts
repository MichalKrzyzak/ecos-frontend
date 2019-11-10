import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../shared/student/students.service";

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  private students: Array<any>;

  constructor(private studentService:StudentsService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data;
    })
  }

}
