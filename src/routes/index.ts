import express from "express";
import {createTodolistHanlder, deleteTodoHandler,getTodohandler,updateHandler} from "../controllers/ToDoList.controller";
import {createTodolistItemHanlder,deleteTodo, getTodolistItemsHanlder, updateTodo } from "../controllers/ToListItems.controller";
import {createUser, deleteUser, getAllUser, updateUser} from "../controllers/User.controller";
import swaggerRouter from "./swagger.router";

const router = express.Router();


//To do list 

/**
 * @openapi
 * /tests:
 *  post:
 *    summary: Create a new test
 *    description: Creates a new test entry with the provided name.
 *    tags:
 *      - Test
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *         schema:
 *           type: object
 *           required:
 *             - title
 *           properties:
 *             title:
 *               type: string
 *               description: The name of the test to create.
 *    responses:
 *      201:
 *        description: Test created successfully
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Test'
 *      400:
 *        description: Invalid input
 *      500:
 *        description: Internal server error
 */
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

router.use('/swagger', swaggerRouter);

export default router;