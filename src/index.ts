import express from 'express';
import http from 'http';
import characterRoute from './routes/character';
import numberRoute from './routes/number';
import resultRoute from './routes/result';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/character', characterRoute);
app.use('/number', numberRoute);
app.use('/', resultRoute);

const PORT = process.env.PORT || 3000;
let server: http.Server | undefined;

if (process.env.NODE_ENV !== 'test') {
  server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

export { app, server };
