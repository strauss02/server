/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import patients from '../data/patients';
import { v4 as uuid } from 'uuid';
import { Patient, PatientWithoutSsn, newPatientEntry } from '../types';

function getPatients(): Patient[] {
  return patients;
}

function getPatientsWithoutSsn(): PatientWithoutSsn[] {
  return patients.map(
    ({ id, name, dateOfBirth, gender, occupation, entries }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
    })
  );
}

function getPatientById(id: string): Patient | undefined {
  return patients.find((patient) => patient.id === id);
}

function addNewPatient(entry: newPatientEntry): Patient {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  const newId: string = uuid();
  const newPatientEntry = { id: newId, ...entry };
  patients.push(newPatientEntry);

  return newPatientEntry;
}

export default {
  getPatients,
  getPatientsWithoutSsn,
  getPatientById,
  addNewPatient,
};
