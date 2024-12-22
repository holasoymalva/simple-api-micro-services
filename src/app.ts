import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

// Configurar variables de entorno
dotenv.config();

const app: Application = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', routes);

// Puerto y servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
