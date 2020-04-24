import {PersonalData} from '../shared/PersonalData';
import {CorrespondenceAddress} from '../shared/CorrespondenceAddress';
import {Class} from "../shared/Class";

export interface Teacher {
  personalData: PersonalData;
  email: string;
  correspondenceAddress: CorrespondenceAddress;
  classes: Class[];
  isActive: boolean;
}
