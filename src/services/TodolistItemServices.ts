import { TodoItem, ITodoItem} from "../models/TodoItem";
import { TodoList, ITodoList } from "../models/TodoList";
//tạo To do list items
const createTodolistItem = async(name: string, des: string, due_at: Date, to_do_group_id: string): Promise<ITodoItem> => {
    const TodoListExist = await TodoList.findById(to_do_group_id);

    if(!TodoListExist){
        throw new Error("To do list not found. Just please create it before create to do list items")
    }

    const todoItem = new TodoItem({name, des, due_at, to_do_group_id})
    return await todoItem.save();
};

//Get To do List items
const getTodolistItems = async (to_do_group_id: string): Promise<ITodoItem[]> => {
    return await TodoItem.find({to_do_group_id});
}

//Update 
const updateTodolistItem = async (id: string, updateData: Partial<ITodoItem>): Promise<ITodoItem>=> {
    const updateItem = await TodoItem.findByIdAndUpdate(
        id, 
        updateData, 
        {new: true, runValidators: true}
    );

    if(!updateItem){
        throw new Error("Sorry the item is not existing");
    }

    return updateItem;
};

//Delete
const deleteTodolistItem = async (id: string): Promise<ITodoItem | null> => {
    return await TodoItem.findByIdAndDelete(id);
}   

export {createTodolistItem, deleteTodolistItem, getTodolistItems, updateTodolistItem};