import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StudentsService} from '../students.service';
import {IStudent} from '../IStudent';
import {IPersonalData} from '../../shared/IPersonalData';
import {ICorrespondenceAddress} from '../../shared/ICorrespondenceAddress';
import {IFieldOfStudy} from '../../fos/IFieldOfStudy';
import {IGrades} from '../../grades/IGrades';

@Component({
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css']
})
export class StudentsDetailsComponent implements OnInit {
  student: IStudent;
  personalData: IPersonalData;
  correspondenceAddress: ICorrespondenceAddress;
  fieldOfStudy: IFieldOfStudy[];
  grades: IGrades[];
  isEditable: boolean = false;
  successMessage: string;

  constructor(private route: ActivatedRoute,
              private studentsService: StudentsService,
              private router: Router) {
  }

  ngOnInit() {
    this.fetchStudentDetails();
  }

  onBack(): void {
    this.router.navigate(['/students']);
  }

  editData(): void {
    this.isEditable = true;
  }

  saveData(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.updateStudent(id)
    this.isEditable = false;
  }

  deactivateStudent() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.student.active = false;

    this.updateStudent(id)
  }

  private updateStudent(id: number) {
    this.studentsService.updateById(id, this.student)
      .subscribe(data => {
          console.log(data)
        },
        error => {
          console.log(error)
        });
  }

  private fetchStudentDetails() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.studentsService.getById(id).subscribe((result) => {
        this.student = result;
        this.personalData = result.personalData;
        this.correspondenceAddress = result.correspondenceAddress;
        this.fieldOfStudy = result.fieldsOfStudy;
        this.grades = result.grades;
      },
      error => console.log(error)
    );
  }
}
