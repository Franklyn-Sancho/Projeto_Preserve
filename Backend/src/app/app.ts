import express from 'express';
import cors from 'cors';
import database from '../database/mongodb';
import router from './routes/router';

const app = express();

database.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

export default app;