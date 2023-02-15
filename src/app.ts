import express, { Express, Request, Response } from 'express';
import { route } from './routes/test.route';
import config from "./config";
import connectDB from './config/db';

const app: Express = express();
const port = config.PORT;

app.use(express.json());

app.get('/', (_: Request, res: Response) => {
  res.send(process.env.NODE_ENV);
});

app.use('/api', route);

app.listen(port, () => {
  connectDB()
  console.log(process.env.NODE_ENV)
  console.log(`[server]: Server is running at http://localhost:${port}`)
});