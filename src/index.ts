import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get('/tasks', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const { title, color } = req.body;
  const task = await prisma.task.create({
    data: { title, color, completed: false },
  });
  res.json(task);
});

app.put('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, color, completed },
  });
  res.json(task);
});

app.delete('/tasks/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.sendStatus(204);
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
