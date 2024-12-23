import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import taskRoutes from './routes/tasks';

dotenv.config();

const app = express();

// CORS Configuration
app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Middleware
app.use(express.json());

// Health Check Route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Backend is running!');
});

// Task Routes
app.use('/tasks', taskRoutes);

// Handle Unknown Routes
app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Route not found' });
});

// Global Error Handler
app.use((err: Error, req: Request, res: Response, next: Function) => {
  console.error('Global Error Handler:', err.message);
  res.status(500).json({ message: 'An internal server error occurred' });
});

// Start Server
const PORT = parseInt(process.env.PORT || '3001', 10);
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
