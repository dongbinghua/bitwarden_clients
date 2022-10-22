export interface FskFile {
  data: Data;
}

export interface Data {
  [key: string]: FskEntry;
}

export enum FskEntryTypesEnum {
  Login = 1,
  CreditCard = 2,
}

export interface FskEntry {
  color: string;
  creditCvv: string;
  creditExpiry: string;
  creditNumber: string;
  favorite: number; // UNIX timestamp
  notes: string;
  password: string;
  passwordList: PasswordList[];
  passwordModifiedDate: number; // UNIX timestamp
  rev: string | number;
  service: string;
  style: string;
  type: FskEntryTypesEnum;
  url: string;
  username: string;
  createdDate: number; // UNIX timestamp
  modifiedDate: number; // UNIX timestamp
  autofillAndroid?: string;
}

export interface PasswordList {
  changedate: string;
  password: string;
}
