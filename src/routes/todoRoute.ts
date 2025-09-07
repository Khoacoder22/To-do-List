import express from "express";
import {createTodolistItemHanlder,deleteTodo, getTodolistItemsHanlder, updateTodo} from "../controllers/ToListItems";

const router = express.Router();

router.post("/:to_do_group_id", createTodolistItemHanlder);
router.get("/:id", getTodolistItemsHanlder);
router.delete("/:id", deleteTodo);
router.put("/:id", updateTodo);

export default router;

