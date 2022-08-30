import axios from './axios';
import {Task} from '../interfaces/tasks';

export const createTask = async (task: Task) => await axios.post('/tasks', task);
