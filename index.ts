import express from 'express';
import diagnosesService from './services/diagnosesService';
import patientService from './services/patientService';
const app = express();
import cors from 'cors';
import toNewPatientEntry from './utils';
import { Fields } from './types';

// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/api/diagnoses', (_req, res) => {
  console.log('someone asked for diagnoses here');
  return res.send(diagnosesService.getDiagnoses());
});

app.get('/api/patients', (_req, res) => {
  console.log('someone asked for patients here');
  return res.send(patientService.getPatientsWithoutSsn());
});

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.get('/api/patients/:id', (req, res) => {
  const patientResult = patientService.getPatientById(req.params.id);
  if (patientResult) {
    res.send(patientResult);
  } else {
    res.sendStatus(404);
  }
});

app.post('/api/patients', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body as Fields);
    const newlyAddedPatient = patientService.addNewPatient(newPatientEntry);
    res.send(newlyAddedPatient);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += 'Error:' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
