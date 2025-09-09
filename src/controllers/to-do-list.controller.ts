import { Request, Response } from "express";
import * as TodoListService from "../services/to-do-list.service";

//tạo item
export const createTodolistHanlder = async(req: Request, res: Response) => {
    try{
        const { user_id } = req.params;
        const {name} = req.body;
        const newTodo = await TodoListService.createTodoList(name, user_id);
        return res.status(201).json(newTodo);
    }
    catch(error : any){
        return res.status(400).json({message: error.message});
    }
}

//lấy items
export const getTodohandler = async(req: Request, res: Response) => {
    try{    
        const todoList = await TodoListService.getAllTodoListsByUser(req.params.id);
        res.json(todoList);
    }
    catch(error : any){
        res.status(400).json({message: error.message});
    }
}

// xóa item
export const deleteTodoHandler = async(req: Request, res: Response ) => {
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
export const updateHandler = async (req: Request, res: Response) => {
    try {
        const updateTodo = await TodoListService.UpdateTodoList(req.params.id, req.body.name);
        res.json(updateTodo)     
    }
    catch(error: any){
        res.status(400).json({message: error.message});
    }
}