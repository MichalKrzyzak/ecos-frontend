import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../service/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../model/student.model";

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  studentsDataSource: MatTableDataSource<Student>
  displayedColumns = ['id', 'firstName', 'lastName', 'collegeId', 'peselNumber', 'fieldOfStudy']

  constructor(private studentsService: StudentsService) {
    this.studentsService.getAllStudents().subscribe((students) => {
      this.studentsDataSource = new MatTableDataSource(students);
    })
  }

  ngOnInit() {
  }

}
