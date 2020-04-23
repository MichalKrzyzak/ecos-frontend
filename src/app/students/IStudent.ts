import {IPersonalData} from '../shared/IPersonalData';
import {ICorrespondenceAddress} from '../shared/ICorrespondenceAddress';
import {IFieldOfStudy} from '../fos/IFieldOfStudy';
import {IGrades} from '../grades/IGrades';

export interface IStudent {
  personalData: IPersonalData;
  email: string;
  correspondenceAddress: ICorrespondenceAddress;
  collegeId: number;
  fieldOfStudy: IFieldOfStudy[];
  grades: IGrades[];
  active: boolean;
}

export class IStudent {

  public constructor(init?: Partial<IStudent>) {
    Object.assign(this, init);
  }
}
