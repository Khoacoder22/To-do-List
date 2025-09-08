import { NextFunction, Request, Response } from "express";
import * as TodoListItemsService from "../services/ToDoListitem.Service";
import { TodoItemStatus } from "../enum/enum";

//tạo items 
export const createTodolistItemHanlder = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {to_do_group_id} = req.params;
        const {name, des, due_at} = req.body;
        const newItems = await TodoListItemsService.createTodolistItem(name, des, new Date(due_at), to_do_group_id);
        res.status(201).json(newItems);

    } catch (error : any){

        res.status(400).json({message: error.message});

    }
};

//lấy items 
export const getTodolistItemsHanlder = async(req: Request, res: Response, next: NextFunction) => {
   
    try {

        const { id } = req.params; 
        const items = await TodoListItemsService.getTodolistItems(id);
        res.json(items);

    } catch(error : any){
        res.status(400).json({message: error.message});
    }
}

//cập nhập
export const updateTodo = async (req: Request, res: Response) => {
    try {
        //check phải có trong status trong enum đã cho
        const {status} = req.body;
        if(status && !Object.values(TodoItemStatus).includes(status)){
            res.status(400).json({
                message: `Invalid staus: ${status}`
            });
        }
        const updated = await TodoListItemsService.updateTodolistItem(req.params.id, req.body);
        res.json(updated);
    }
    catch(error : any){
        res.status(400).json({message: error.message});
    }
}

//xóa
export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const deleted = await TodoListItemsService.deleteTodolistItem(req.params.id);
        if(!deleted){
            res.status(404).json({message: "Item not found"});
        }
        res.json({message: "Item deleted", deleted});
    } catch(error: any) {
        res.status(400).json({message: error.message});
    }
};