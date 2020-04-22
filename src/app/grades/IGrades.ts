import {IFieldOfStudy} from '../fos/IFieldOfStudy';
import {IStudent} from '../students/IStudent';
import {IAssignment} from '../assignments/IAssignment';

export interface IGrades {
  grade: number;
  fieldOfStudy: IFieldOfStudy;
  assignment: IAssignment;
  student: IStudent;
}
