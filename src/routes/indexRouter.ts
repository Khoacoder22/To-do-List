import express from "express";
import {createTodolistHanlder, deleteTodoHandler,getTodohandler,updateHandler} from "../controllers/ToDoList.controller";
import {createTodolistItemHanlder,deleteTodo, getTodolistItemsHanlder, updateTodo } from "../controllers/ToListItems.controller";
import {createUser, deleteUser, getAllUser, updateUser} from "../controllers/User.controller";

const router = express.Router();

//To do list 
router.post("/todo/:user_id", createTodolistHanlder);
router.get("/todo/:id", getTodohandler);
router.put("/todo/:id", updateHandler);
router.delete("/todo/:id", deleteTodoHandler);


//To do list items
router.post("/todoitems/:to_do_group_id", createTodolistItemHanlder);
router.get("/todoitems/:id", getTodolistItemsHanlder);
router.put("/todoitems/:id", updateTodo);
router.delete("/todoitems/:id", deleteTodo);

//User 
router.post("/user", createUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/getAll", getAllUser);

export default router;