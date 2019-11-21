import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../../service/students/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../model/student.model";
import {SelectionModel} from "@angular/cdk/collections";

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  studentsDataSource: MatTableDataSource<Student>
  displayedColumns = ['select', 'id', 'firstName', 'lastName', 'collegeId', 'peselNumber', 'fieldOfStudy', 'active']
  selection = new SelectionModel<Student>(true, []);

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

  applyFilter(filterValue: string) {
    this.studentsDataSource.filter = filterValue.trim().toLowerCase();
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.studentsDataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.studentsDataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Student): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }
}
