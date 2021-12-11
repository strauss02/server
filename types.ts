export interface Diagnoses {
  code: string;
  name: string;
  latin?: string;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Entry {}

export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: Gender;
  dateOfBirth: string;
  entries: Entry[];
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
