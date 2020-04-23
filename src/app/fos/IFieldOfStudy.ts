import {IStudent} from '../students/IStudent';
import {IAssignment} from '../assignments/IAssignment';

export interface IFieldOfStudy {
  fieldOfStudy: string;
  students: IStudent[];
  assignments: IAssignment[];
}
