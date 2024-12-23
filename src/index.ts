import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import taskRoutes from './routes/tasks';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use('/tasks', taskRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
