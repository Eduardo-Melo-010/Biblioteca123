// src/routes/Routes.ts
import { Application } from 'express';
import homeRoutes from './homeRoutes';
import livroRoutes from './livroRoutes';

export default class Routes {
  constructor(app: Application) {

    app.use('/biblioteca', homeRoutes);
    app.use('/biblioteca/livro', livroRoutes);
  }
}
