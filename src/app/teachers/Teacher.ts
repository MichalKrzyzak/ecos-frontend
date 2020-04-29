import {PersonalData} from '../shared/PersonalData';
import {CorrespondenceAddress} from '../shared/CorrespondenceAddress';
import {Class} from "../class/Class";

export class Teacher {
  personalData: PersonalData;
  email: string;
  correspondenceAddress: CorrespondenceAddress;
  classes: Class[];
  isActive: boolean;

  public constructor(init?: Partial<Teacher>) {
    Object.assign(this, init);
  }
}
