import {Student} from "../students/Student";
import {Teacher} from "../teachers/Teacher";
import {FieldOfStudy} from "../fos/FieldOfStudy";
import {Assignment} from "../assignments/Assignment";

export class Class {
  className: string;
  students: Student[];
  teacher: Teacher;
  fieldOfStudy: FieldOfStudy;
  assignments: Assignment[];
}
