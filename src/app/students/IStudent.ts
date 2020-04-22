import {IPersonalData} from '../shared/IPersonalData';
import {ICorrespondenceAddress} from '../shared/ICorrespondenceAddress';

export interface IStudent {
  id: number;
  personalData: IPersonalData;
  email: string;
  correspondenceAddress: ICorrespondenceAddress;
  collegeId: number;
  fieldsOfStudy: any[];
  grades: any[];
  active: boolean;
}
