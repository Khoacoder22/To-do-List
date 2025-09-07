import { TodoList, ITodoList } from "../models/TodoList";
import { TodoItem } from "../models/TodoItem";
import { TodoListStatus, TodoItemStatus } from "../enum/enum";

//Tạo do to list 
const createTodoList = async(name: string, user_id: string ): Promise<ITodoList> => {
    const createTodo = new TodoList({name, user_id});
    return await createTodo.save();
}

//Get all 
const getAllTodoListsByUser = async (id: string): Promise<ITodoList[] | null> => {
    return await TodoList.findById(id);
};
  

//delete to do list
const deleteTodoList = async (id: string): Promise<ITodoList | null> => {
    const existingTodo = await TodoList.findById(id);
    if(!existingTodo){
        throw new Error("To do is not existing");
    }
    return await TodoList.findByIdAndDelete(id);
}

//Update To do list
const UpdateTodoList = async(id: string, name: string) : Promise<ITodoList | null> => {
    const existingTodo = await TodoList.findById(id);
    if(!existingTodo){
        throw new Error("To do is not existing");
    }

    //lấy toàn bộ
    const items = await TodoItem.find({to_do_group_id: id});

    const allFinished = items.length > 0 && items.every(item => item.status === TodoItemStatus.Finish);

    const newStatus = allFinished ? TodoListStatus.finished : TodoListStatus.Unfinished;

    const updateItem = await TodoList.findByIdAndUpdate(id, { name, status: newStatus }, { new: true });

    return updateItem;
}

export {createTodoList, getAllTodoListsByUser, deleteTodoList, UpdateTodoList};