import {Component, OnInit, ViewChild} from '@angular/core';
import {StudentsService} from "../../../service/students/students.service";
import {MatTableDataSource} from "@angular/material/table";
import {Student} from "../../../model/student.model";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Router} from "@angular/router";

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.css']
})
export class StudentsTableComponent implements OnInit {
  student = new Student();
  studentsDataSource: MatTableDataSource<Student>;
  displayedColumns = ['collegeId', 'firstName', 'lastName', 'peselNumber', 'fieldOfStudy', 'yearOfStudy', 'active', 'actions'];
  isLoadingResults = false;

  constructor(private studentsService: StudentsService,
              private router: Router) {
  }

  getStudents(): void {
    this.isLoadingResults = true;
    this.studentsService.getAllStudents()
      .subscribe((students) => {
        // @ts-ignore
        this.studentsDataSource.data = students;
        this.isLoadingResults = false;
      })
  }

  @ViewChild('scheduledOrdersPaginator', {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit(): void {
    this.getStudents()
    this.studentsDataSource = new MatTableDataSource();
    this.studentsDataSource.paginator = this.paginator;
    this.studentsDataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.studentsDataSource.filter = filterValue.trim().toLowerCase();

    if (this.studentsDataSource.paginator) {
      this.studentsDataSource.paginator.firstPage();
    }
  }

  getStudentDetails(id: number) {
    this.router.navigate(['/student-details/' + id]);
  }

  addStudentForm() {
    this.router.navigate(['students/add']);
  }
}
