import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../../service/students/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../model/students/student.model";

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  studentsDataSource: MatTableDataSource<Student>
  displayedColumns = ['id', 'firstName', 'lastName', 'collegeId', 'peselNumber', 'fieldOfStudy', 'isActive']
  isVisible: boolean = false;

  constructor(private studentsService: StudentsService) {
  }

  loadStudents(): void {
    this.studentsService.getAllStudents()
      .subscribe((students) => {
        // @ts-ignore
        this.studentsDataSource = new MatTableDataSource(students);
      })
  }

  ngOnInit(): void {
    this.loadStudents()
  }

}
