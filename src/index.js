import express from 'express';

const app = express();

app.use('/', (_req, res) => {
  res.send('Service is running!!!');
});

const PORT = process.env.PORT || 4000;
console.log('PORT--: ', PORT);

app.listen(PORT, async () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
