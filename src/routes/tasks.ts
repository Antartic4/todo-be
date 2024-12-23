import express from 'express';
import prisma from '../prisma/client';

const router = express.Router();

router.get('/', async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

router.post('/', async (req, res) => {
  const { title, color } = req.body;
  const task = await prisma.task.create({ data: { title, color } });
  res.json(task);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;
  const task = await prisma.task.update({
    where: { id: Number(id) },
    data: { title, color, completed },
  });
  res.json(task);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await prisma.task.delete({ where: { id: Number(id) } });
  res.status(204).send();
});

export default router;
