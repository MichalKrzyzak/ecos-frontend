import {Component, OnInit} from '@angular/core';
import {Student} from '../Student';
import {StudentsService} from '../students.service';
import {PersonalData} from '../../shared/PersonalData';
import {CorrespondenceAddress} from '../../shared/CorrespondenceAddress';

@Component({
  selector: 'pm-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  private studentsService;
  pageTitle = 'Lista studentów';
  _listFilter: string;
  personalData: PersonalData;
  correspondenceAddress: CorrespondenceAddress;
  filterStudents: Student[];
  students: Student[];

  constructor(studentService: StudentsService) {
    this.studentsService = studentService;
  }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(): void {
    this.studentsService.getAll()
      .subscribe((results) => {
          this.students = results;
          this.personalData = results.personalData;
          this.correspondenceAddress = results.correspondenceAddress;
          this.filterStudents = this.students;
        },
        error => console.log(error)
      );
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterStudents = this.listFilter ? this.applyFilter(this.listFilter) : this.students;
  }

  applyFilter(filterBy: string): Student[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((student: Student) =>
      student.personalData.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || student.personalData.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}

