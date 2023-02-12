import { Application } from 'express';
import healthRoutes from './health.routes';

export default (app: Application) => {
  healthRoutes(app);
};
