import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
import docs from '../swagger.json';
import connectDb from './database/connection';
import routes from './routes/index';

const app = express();
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));
app.use('/api', routes);

export default app;
