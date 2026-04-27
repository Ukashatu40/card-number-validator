import express, { Application, Request, Response, NextFunction } from 'express';
import validateRoutes from './routes/validate';

const app: Application = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Main validation routes
app.use('/api', validateRoutes);

// General 404 handler for unknown routes
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: 'Not Found' });
});

export default app;
