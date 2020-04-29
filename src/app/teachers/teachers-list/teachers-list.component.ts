import {Component, OnInit} from '@angular/core';
import {TeachersService} from "../teachers.service";
import {PersonalData} from "../../shared/PersonalData";
import {CorrespondenceAddress} from "../../shared/CorrespondenceAddress";
import {Teacher} from "../Teacher";

@Component({
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.css']
})
export class TeachersListComponent implements OnInit {
  private teachersService;
  pageTitle = 'Lista nauczycieli';
  _listFilter: string;
  personalData: PersonalData;
  correspondenceAddress: CorrespondenceAddress;
  filterTeachers: Teacher[];
  teachers: Teacher[];

  constructor(teachersService: TeachersService) {
    this.teachersService = teachersService;
  }

  ngOnInit() {
    this.getTeachers();
  }

  getTeachers(): void {
    this.teachersService.getAll()
      .subscribe((results) => {
        this.teachers = results;
        this.personalData = results.personalData;
        this.correspondenceAddress = results.correspondenceAddress;
        this.filterTeachers = this.teachers;
      },
        error => console.log(error)
      );
  }

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterTeachers = this.listFilter ? this.applyFilter(this.listFilter) : this.teachers;
  }

  applyFilter(filterBy: string): Teacher[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.teachers.filter((teacher: Teacher) =>
      teacher.personalData.firstName.toLocaleLowerCase().indexOf(filterBy) !== -1 || teacher.personalData.lastName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
}
