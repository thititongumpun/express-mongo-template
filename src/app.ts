import express, { Express, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from "helmet";

import { router } from './api/v1/todos/todo.route';
import config from "./config";
import connectDB from './config/db';

const app: Express = express();
const port = config.PORT;

app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send('Hello World');
});

app.use('/api', router);

app.listen(port, () => {
  connectDB()
  console.log(process.env.NODE_ENV)
  console.log(`[server]: Server is running at http://localhost:${port}`)
});