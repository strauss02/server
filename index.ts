import express from 'express';
import diagnosesService from './services/diagnosesService';
import patientService from './services/patientService';
const app = express();
import cors from 'cors';

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
