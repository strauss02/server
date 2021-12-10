import diagnoses from '../data/diagnoses';
import { Diagnoses } from '../types';

function getDiagnoses(): Diagnoses[] {
  return diagnoses;
}

export default {
  getDiagnoses,
};
