import {IPersonalData} from '../shared/IPersonalData';
import {ICorrespondenceAddress} from '../shared/ICorrespondenceAddress';
import {IFieldOfStudy} from '../fos/IFieldOfStudy';

export interface ITeacher {
  personalData: IPersonalData;
  email: string;
  correspondenceAddress: ICorrespondenceAddress;
  fieldOfStudy: IFieldOfStudy;
  isActive: boolean;
}
