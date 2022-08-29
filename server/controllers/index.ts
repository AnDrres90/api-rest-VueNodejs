import { Request, Response } from "express"

export const getAllTasks = (req: Request, res: Response) => {
    try {
        res.send("getting tasks");
    } catch (error) {
        res.send(error)
    }
}

export const getOneTask = (req: Request, res: Response) => {
    try {
        res.send("getting a task");
    } catch (error) {
        res.send(error)
    }
}

export const createTask = (req: Request, res: Response) => {
    try {
        res.send("create tasks");
    } catch (error) {
        res.send(error)
    }
}

export const removeTask = (req: Request, res: Response) => {
    try {
        res.send("Delete tasks");
    } catch (error) {
        res.send(error)
    }
}

export const updatedTask = (req: Request, res: Response) => {
    try {
        res.send("Updated tasks");
    } catch (error) {
        res.send(error)
    }
}