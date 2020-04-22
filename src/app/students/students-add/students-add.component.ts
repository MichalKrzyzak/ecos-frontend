import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FosAssignDialogComponent} from '../../fos/fos-assign-dialog/fos-assign-dialog.component';
import {StudentsService} from '../students.service';
import {IStudent} from '../IStudent';
import {IPersonalData} from '../../shared/IPersonalData';
import {ICorrespondenceAddress} from '../../shared/ICorrespondenceAddress';

@Component({
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
  private studentsService: StudentsService;
  studentToAdd: IStudent = new IStudent();
  personalData: IPersonalData = new class implements IPersonalData {
    firstName: string;
    lastName: string;
    peselNumber: string;
  };
  correspondenceAddress: ICorrespondenceAddress = new class implements ICorrespondenceAddress {
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    city: string;
    voivodeship: string;
    zipCode: string;
  };

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
      this.studentToAdd.fieldsOfStudy = result;
      this.studentToAdd.personalData = this.personalData;
      this.studentToAdd.correspondenceAddress = this.correspondenceAddress;
      this.createStudent()
      console.log(this.studentToAdd)
    });
  }
}
