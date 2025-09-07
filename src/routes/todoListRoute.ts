import express from "express";
import {createTodolistHanlder, deleteTodoHandler, getTodohandler, updateHandler} from "../controllers/ToList";

const router = express.Router();

router.post("/", createTodolistHanlder);
router.get("/:id", getTodohandler);
router.delete("/:id", deleteTodoHandler);
router.put("/:id", updateHandler);

export default router;