import express, { Application } from 'express';
import cors from 'cors';
import { router } from './student/student.router';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!!!');
    return;
  }
  next();
});

app.use('/students', router);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
});
