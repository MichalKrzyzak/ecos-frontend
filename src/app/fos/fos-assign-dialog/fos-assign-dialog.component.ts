import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FieldOfStudyService} from '../field-of-study.service';
import {FieldOfStudy} from '../FieldOfStudy';

@Component({
  templateUrl: './fos-assign-dialog.component.html',
  styleUrls: ['./fos-assign-dialog.component.css']
})
export class FosAssignDialogComponent {
  private fieldOfStudyService: FieldOfStudyService;
  public selectedFieldOfStudy: FieldOfStudy;
  fieldsOfStudy: FieldOfStudy[];
  isButtonVisible: boolean = false;
  whetherToAdd: boolean;

  constructor(public dialogRef: MatDialogRef<FosAssignDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public message: string,
              fieldOfStudyService: FieldOfStudyService) {
    this.fieldOfStudyService = fieldOfStudyService;
  }

  closeDialog() {
    this.dialogRef.close(this.selectedFieldOfStudy);
  }

  onButtonChange(value: string) {
    this.isButtonVisible = true;

    if (value === 'Yes') {
      this.whetherToAdd = true;
      this.fetchFieldsOfStudy();
    } else {
      this.whetherToAdd = false;
    }
  }

  fetchFieldsOfStudy() {
    this.fieldOfStudyService.getAll()
      .subscribe((results) => {
          this.fieldsOfStudy = results;
          console.log(this.fieldsOfStudy);
        },
        error => console.log(error)
      );
  }
}
