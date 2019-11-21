import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {PeselValidate} from "../../../validator/pesel-validator";

@Component({
  selector: 'app-add-student-form',
  templateUrl: './add-student-form.component.html',
  styleUrls: ['./add-student-form.component.css']
})
export class AddStudentFormComponent implements OnInit {
  peselNumber = new FormControl('', [Validators.required, PeselValidate]);

  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.peselNumber.hasError('required') ? 'Nie wprowadzono numeru PESEL' :
      this.peselNumber.hasError('invalidPesel') ? 'Numer PESEL jest nieprawidłowy' :
        '';
  }

}
