import {Component, OnInit} from '@angular/core';
import {StudentsService} from "../../../service/students/students.service";
import {Student} from "../../../model/student.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  id: number;
  student: Student;
  private sub: any;


  constructor(private studentsService: StudentsService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.studentsService.getStudentById(this.id)
      .subscribe(student => this.student = student);
  }

  updateActive(active: boolean) {
    this.studentsService.updateStudentById(this.student.id,
      {
        firstName: this.student.firstName,
        lastName: this.student.lastName,
        collegeId: this.student.collegeId,
        peselNumber: this.student.peselNumber,
        fieldOfStudy: this.student.fieldOfStudy,
        yearOfStudy: this.student.yearOfStudy,
        active: active
      }).subscribe((student) => {
      console.log(student);
      this.student = student as Student;
    });
  }
}
