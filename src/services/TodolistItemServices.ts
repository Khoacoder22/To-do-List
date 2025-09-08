import { TodoItem, ITodoItem } from "../models/TodoItem";
import { TodoList } from "../models/TodoList";
import { UpdateTodoList } from "../services/ToListService";

// Tạo To do list items
const createTodolistItem = async (
  name: string,
  des: string,
  due_at: Date,
  to_do_group_id: string
): Promise<ITodoItem> => {
  const TodoListExist = await TodoList.findById(to_do_group_id);

  if (!TodoListExist) {
    throw new Error(
      "To do list not found. Please create a list before creating items"
    );
  }

  const todoItem = new TodoItem({ name, des, due_at, to_do_group_id });
  const savedItem = await todoItem.save();

  // cập nhật status cha
  await UpdateTodoList(to_do_group_id, TodoListExist.name);

  return savedItem;
};

// Get To do List items
const getTodolistItems = async (to_do_group_id: string): Promise<ITodoItem[]  | null> => {
  return await TodoItem.find({ to_do_group_id });
};

// Update item + cập nhật list cha
const updateTodolistItem = async (
  id: string,
  updateData: Partial<ITodoItem>
): Promise<ITodoItem> => {

  const updateItem = await TodoItem.findByIdAndUpdate(id, updateData, {
    new: true,
    runValidators: true,
  });

  if (!updateItem) {
    throw new Error("Sorry the item is not existing");
  }

  // update status list cha
  await UpdateTodoList(updateItem.to_do_group_id.toString(), "");

  return updateItem;
  
};

// Delete item + cập nhật list cha
const deleteTodolistItem = async (id: string): Promise<ITodoItem | null> => {
  const item = await TodoItem.findByIdAndDelete(id);

  if (item) {
    await UpdateTodoList(item.to_do_group_id.toString(), "");
  }

  return item;
};

export { createTodolistItem, deleteTodolistItem, getTodolistItems, updateTodolistItem };
