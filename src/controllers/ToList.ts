import { NextFunction, Request, Response } from "express";
import * as TodoListService from "../services/ToListService";

//tạo item
export const createTodolistHanlder = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const {name, user_id} = req.body;
        const newTodo = await TodoListService.createTodoList(name, user_id);
        res.status(201).json(newTodo);
    }
    catch(error : any){
        res.status(400).json({message: error.message});
    }
}

//lấy items
export const getTodohandler = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const items = await TodoListService.getAllTodoListsByUser(req.params.id);
        res.json(items);
    }
    catch(error : any){
        res.status(400).json({message: error.message});
    }
}

// xóa item
export const deleteTodoHandler = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const deleted = await TodoListService.deleteTodoList(req.params.id);
        if(!deleted){
            res.status(404).json({message: "To do list deleted not found"});
        }
        res.json({message: "To do List deleted", deleted});
    } catch(error: any){
        res.status(400).json({message: error.message});
    }
}

//update item
export const updateHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const updateTodo = await TodoListService.UpdateTodoList(req.params.id, req.body.name);
        res.json(updateTodo)     
    }
    catch(error: any){
        res.status(400).json({message: error.message});
    }
}