import {FieldOfStudy} from '../fos/FieldOfStudy';
import {Student} from '../students/Student';
import {Assignment} from '../assignments/Assignment';

export class Grades {
  grade: number;
  fieldOfStudy: FieldOfStudy;
  assignment: Assignment;
  student: Student;
}
