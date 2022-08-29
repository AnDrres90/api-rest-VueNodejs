import { Router } from "express";
const router = Router();
import {getAllTasks, getOneTask, createTask, removeTask, updatedTask } from "../controllers/index"

router.get('/tasks', getAllTasks)
router.post('/tasks', createTask)
router.get('/tasks/:id', getOneTask)
router.delete('/tasks/:id', removeTask)
router.put('/tasks/:id', updatedTask)

export default router;