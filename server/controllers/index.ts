import { Request, Response } from "express"
import { ObjectId } from "mongodb";
import Task from '../models/tasks'

export const getAllTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        return res.json(error)
    }
}

export const getOneTask = async (req: Request, res: Response) => {
    try {
        const task = await Task.findById(req.params.id);
        res.json(task);
    } catch (error) {
        return res.json(error)
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const {title, description} = req.body; 
        const task = new Task({title, description});
        await task.save();
        res.json(task);
    } catch (error) {
        return res.json(error)
    }
}

export const removeTask = async (req: Request, res: Response) => {
    try {
        const taskRemove = await Task.findByIdAndDelete(req.params.id);
        res.json(taskRemove);
    } catch (error) {
        return res.json(error)
    }
}

export const updatedTask = async (req: Request, res: Response) => {
    try {
        const taskUpdated = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(taskUpdated);
    } catch (error) {
        return res.json(error)
    }
}