import {PersonalData} from '../shared/PersonalData';
import {CorrespondenceAddress} from '../shared/CorrespondenceAddress';
import {FieldOfStudy} from "../fos/FieldOfStudy";
import {Class} from "../shared/Class";
import {Grades} from "../grades/Grades";

export class Student {
  personalData: PersonalData;
  email: string;
  correspondenceAddress: CorrespondenceAddress;
  collegeId: number;
  yearOfStudy: string;
  studentsGroup: string;
  fieldsOfStudy: FieldOfStudy;
  classes: Class[];
  grades: Grades[];
  isActive: boolean;

  public constructor(init?: Partial<Student>) {
    Object.assign(this, init);
  }
}
