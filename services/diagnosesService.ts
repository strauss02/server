import diagnoses from '../data/diagnoses.json';
import { Diagnoses } from './types';

function getDiagnoses(): Diagnoses[] {
  return diagnoses;
}

export default {
  getDiagnoses,
};
