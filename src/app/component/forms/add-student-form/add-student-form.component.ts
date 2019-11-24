import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {PeselValidate} from "../../../helpers/pesel-validator";
import {Student} from "../../../model/student.model";
import {StudentsService} from "../../../service/students/students.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  student: Student = new Student();
  peselNumber = new FormControl({value: this.student.peselNumber}, [Validators.required, PeselValidate]);
  submitted = false;
  createStudentForm: FormGroup
  default = 'true';


  constructor(private studentService: StudentsService,
              private router: Router,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.createStudentForm = this.formBuilder.group({
      firstName: new FormControl({value: this.student.firstName}, Validators.required),
      lastName: new FormControl({value: this.student.lastName}, Validators.required),
      peselNumber: this.peselNumber,
      collegeId: new FormControl({value: this.student.collegeId}, Validators.required),
      fieldOfStudy: new FormControl({value: this.student.fieldOfStudy}),
      yearOfStudy: new FormControl({value: this.student.yearOfStudy}),
      active: new FormControl({value: this.student.active}, Validators.required),
    })
  }

  get formControls() {
    return this.createStudentForm.controls;
  }

  submitStudent() {
    this.submitted = true;

    if (this.createStudentForm.invalid) {
      this.openSnackBar("Formularz wypełniony niepoprawnie!", "OK")
      return;
    }

    this.studentService.createStudent(this.student)
      .subscribe(student => console.log(student), error => console.log(error))
    this.openSnackBar("Pomyślnie dodano studenta do bazy danych", "OK")

    this.student = new Student()
    this.goToList()

  }

  goToList() {
    this.router.navigate(['/students-list'])
  }

  getErrorMessage() {
    return this.peselNumber.hasError('required') ? 'Nie wprowadzono numeru PESEL' :
      this.peselNumber.hasError('invalidPesel') ? 'Numer PESEL jest nieprawidłowy' :
        '';
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
