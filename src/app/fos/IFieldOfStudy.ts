import {IStudent} from '../students/IStudent';
import {IAssignment} from '../assignments/IAssignment';
import {ITeacher} from '../teachers/ITeacher';

export interface IFieldOfStudy {
  fieldOfStudy: string;
  teachers: ITeacher[];
  students: IStudent[];
  assignments: IAssignment[];
}
