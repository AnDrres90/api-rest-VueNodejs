"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedTask = exports.removeTask = exports.createTask = exports.getOneTask = exports.getAllTasks = void 0;
const tasks_1 = __importDefault(require("../models/tasks"));
const getAllTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasks = yield tasks_1.default.find();
        res.json(tasks);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.getAllTasks = getAllTasks;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield tasks_1.default.findById(req.params.id);
        res.json(task);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.getOneTask = getOneTask;
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const task = new tasks_1.default({ title, description });
        yield task.save();
        res.json(task);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.createTask = createTask;
const removeTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskRemove = yield tasks_1.default.findByIdAndDelete(req.params.id);
        res.json(taskRemove);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.removeTask = removeTask;
const updatedTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskUpdated = yield tasks_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(taskUpdated);
    }
    catch (error) {
        return res.json(error);
    }
});
exports.updatedTask = updatedTask;
