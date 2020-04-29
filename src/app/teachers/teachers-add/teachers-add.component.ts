import {Component, OnInit} from '@angular/core';
import {PersonalData} from "../../shared/PersonalData";
import {CorrespondenceAddress} from "../../shared/CorrespondenceAddress";
import {MatDialog} from "@angular/material/dialog";
import {TeachersService} from "../teachers.service";
import {Teacher} from "../Teacher";
import {Router} from "@angular/router";

@Component({
  templateUrl: './teachers-add.component.html',
  styleUrls: ['./teachers-add.component.css']
})
export class TeachersAddComponent implements OnInit {
  private teachersService: TeachersService;
  private router: Router;
  teacherToAdd: Teacher = new Teacher();
  personalData: PersonalData = new PersonalData()
  correspondenceAddress: CorrespondenceAddress = new CorrespondenceAddress()

  constructor(private dialog: MatDialog,
              teachersService: TeachersService,
              router: Router) {
    this.teachersService = teachersService;
    this.router = router;
  }

  ngOnInit() {
  }

  createTeacher(): void {
    this.teacherToAdd.personalData = this.personalData;
    this.teacherToAdd.correspondenceAddress = this.correspondenceAddress;
    this.teachersService.create(this.teacherToAdd).subscribe(teacher => console.log(teacher), error => console.log(error));
    this.router.navigateByUrl("/teachers")
  }
}
