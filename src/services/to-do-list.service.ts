import { TodoList, ITodoList } from "../models/TodoList";
import { TodoItem } from "../models/TodoItem";
import { TodoListStatus, TodoItemStatus } from "../enum/enum";
import {User, IUser} from "../models/User";

// Tạo todo list
const createTodoList = async (name: string, user_id: string): Promise<ITodoList> => {

  const findUserId = await User.findById(user_id);
  
  if(!findUserId){
    throw new Error("User id is not exist !");
  }

  const createTodo = new TodoList({ name, user_id });
  return await createTodo.save();
};

// Get all list theo user
const getAllTodoListsByUser = async (user_Id: string): Promise<ITodoList[] | null> => {
    return await TodoList.find({user_id : user_Id});
};

// Delete list
const deleteTodoList = async (id: string): Promise<ITodoList | null> => {
  const existingTodo = await TodoList.findById(id);
  if (!existingTodo) {
    throw new Error("To do is not existing");
  }
  return await TodoList.findByIdAndDelete(id);
};

// Update list (tên + status)
const UpdateTodoList = async (id: string, name?: string): Promise<ITodoList | null> => {
  const existingTodo = await TodoList.findById(id);

  if (!existingTodo) {
    throw new Error("To do is not existing");
  }

  // lấy toàn bộ items của list cha
  const items = await TodoItem.find({ to_do_group_id: id });

  const allFinished = items.length > 0 && items.every((item) => item.status === TodoItemStatus.Finish);

  const newStatus = allFinished ? TodoListStatus.Finished : TodoListStatus.Unfinished;

  const updateItem = await TodoList.findByIdAndUpdate(
    id,
    { name: name || existingTodo.name, status: newStatus },
    { new: true }
  );

  return updateItem;
};

export { createTodoList, getAllTodoListsByUser, deleteTodoList, UpdateTodoList };
