import patients from '../data/patients.json';
import { Patient, PatientWithoutSsn } from './types';

function getPatients(): Patient[] {
  return patients;
}

function getPatientsWithoutSsn(): PatientWithoutSsn[] {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
}

export default {
  getPatients,
  getPatientsWithoutSsn,
};
