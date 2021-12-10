export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
}

export type Ssn = `${number | string}-${number | string}`;

export enum Gender {
  Male = 'male',
  Female = 'female',
}

export type Fields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

export type newPatientEntry = Omit<Patient, 'id'>;

export type PatientWithoutSsn = Omit<Patient, 'ssn'>;
