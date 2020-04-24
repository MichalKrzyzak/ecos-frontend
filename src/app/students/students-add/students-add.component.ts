import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FosAssignDialogComponent} from '../../fos/fos-assign-dialog/fos-assign-dialog.component';
import {StudentsService} from '../students.service';
import {Student} from '../Student';
import {PersonalData} from '../../shared/PersonalData';
import {CorrespondenceAddress} from '../../shared/CorrespondenceAddress';
import {FieldOfStudy} from "../../fos/FieldOfStudy";
import {Assignment} from "../../assignments/Assignment";
import {Class} from "../../shared/Class";

@Component({
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
  private studentsService: StudentsService;
  studentToAdd: Student = new Student();
  fieldOfStudy: FieldOfStudy = new FieldOfStudy()
  personalData: PersonalData = new PersonalData()
  correspondenceAddress: CorrespondenceAddress = new CorrespondenceAddress()

  constructor(private dialog: MatDialog,
              studentService: StudentsService) {
    this.studentsService = studentService;
  }

  ngOnInit() {
    this.generateRandomCollegeId();
  }

  private generateRandomCollegeId(): void {
    this.studentToAdd.collegeId = Math.floor((Math.random() * 10000000) + 1);
    // TODO zrobic tworzenie collegeID po sprawdzeniu czy taki istnieje w bazie danych
  }

  createStudent(): void {
    this.studentsService.create(this.studentToAdd).subscribe(student => console.log(student), error => console.log(error));
  }

  openDialog() {
    const dialogRef = this.dialog.open(FosAssignDialogComponent, {
      width: '350px',
      data: 'Czy chcesz przypisać studenta do kierunku?',
    });
    dialogRef.afterClosed().subscribe(result => {
      this.fieldOfStudy.fieldOfStudy = result
      this.studentToAdd.fieldsOfStudy = this.fieldOfStudy;
      this.studentToAdd.personalData = this.personalData;
      this.studentToAdd.correspondenceAddress = this.correspondenceAddress;
      this.createStudent()
      console.log(this.studentToAdd)
    });
  }
}
