import {Component, OnInit} from '@angular/core';
import {IStudent} from '../IStudent';
import {StudentsService} from '../students.service';
import {IPersonalData} from '../../shared/IPersonalData';
import {ICorrespondenceAddress} from '../../shared/ICorrespondenceAddress';

@Component({
  selector: 'pm-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css'],
})
export class StudentsListComponent implements OnInit {
  private studentsService;
  pageTitle = 'Lista studentów';
  _listFilter: string;
  personalData: IPersonalData;
  correspondenceAddress: ICorrespondenceAddress;
  filterStudents: IStudent[];
  students: IStudent[];

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

  applyFilter(filterBy: string): IStudent[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.students.filter((student: IStudent) =>
      student.personalData.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || student.personalData.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}

