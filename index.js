import express from 'express';

const app = express();

app.use('/', (_req, res) => {
  res.send('Service is running!');
});

const PORT = 4000;

app.listen(PORT, async () => {
  console.log(`App is running on http://localhost:${PORT}`);
})
