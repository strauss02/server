import { newPatientEntry, Ssn, Gender, Fields } from './types';

export default function toNewPatientEntry({
  name,
  dateOfBirth,
  ssn,
  gender,
  occupation,
}: Fields): newPatientEntry {
  const newEntry: newPatientEntry = {
    name: parseName(name),
    dateOfBirth: parseDateOfBirth(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation),
  };

  return newEntry;
}

const parseGender = (text: unknown): Gender => {
  if (!text || !isGender(text)) {
    throw new Error('Gender is incorrect or missing');
  }
  return text;
};

const parseSsn = (text: unknown): Ssn => {
  console.log(`SSN CHECK: ${text}`);
  if (!text || !isSsn(text)) {
    throw new Error('Ssn is incorrect or missing');
  }
  return text;
};

const parseOccupation = (text: unknown): string => {
  if (!text || !isString(text)) {
    throw new Error('Occupation is incorrect or missing');
  }
  return text;
};

const parseName = (input: unknown): string => {
  if (!input || !isString(input)) {
    throw new Error('Name is incorrect or missing');
  }

  return input;
};

const parseDateOfBirth = (date: unknown): string => {
  if (!isString(date) || !isDate(date) || !date) {
    throw new Error('there was a problem with the date');
  }
  return date;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string';
};

const isDate = (text: string): boolean => {
  return Boolean(Date.parse(text));
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (text: any): text is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(text);
};

const isSsn = (text: unknown): text is Ssn => {
  const regex = new RegExp(/.{6}-.{3,4}/);
  if (isString(text) && regex.test(text)) {
    return true;
  }
  return false;
};
