import express from "express";
import { createTodolistItemHanlder, deleteTodo, getTodolistItemsHanlder, updateTodo } from "../controllers/ToListItems";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TodoListItems
 *   description: API quản lý các item trong TodoList
 */

/**
 * @swagger
 * /todo-item/{to_do_group_id}:
 *   post:
 *     summary: Tạo mới một item trong TodoList
 *     tags: [TodoListItems]
 *     parameters:
 *       - in: path
 *         name: to_do_group_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của TodoList cha
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Đi chợ
 *               status:
 *                 type: string
 *                 example: pending
 *     responses:
 *       201:
 *         description: Item được tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 title:
 *                   type: string
 *                   example: Đi chợ
 *                 status:
 *                   type: string
 *                   example: pending
 *       400:
 *         description: Lỗi request
 */
router.post("/:to_do_group_id", createTodolistItemHanlder);

/**
 * @swagger
 * /todo-item/{id}:
 *   get:
 *     summary: Lấy thông tin item trong TodoList theo ID
 *     tags: [TodoListItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của item
 *     responses:
 *       200:
 *         description: Trả về thông tin item
 *       404:
 *         description: Không tìm thấy item
 */
router.get("/:id", getTodolistItemsHanlder);

/**
 * @swagger
 * /todo-item/{id}:
 *   put:
 *     summary: Cập nhật item trong TodoList theo ID
 *     tags: [TodoListItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: Đi chợ mua thêm rau
 *               status:
 *                 type: string
 *                 example: done
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy item
 */
router.put("/:id", updateTodo);

/**
 * @swagger
 * /todo-item/{id}:
 *   delete:
 *     summary: Xóa item trong TodoList theo ID
 *     tags: [TodoListItems]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của item
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy item
 */
router.delete("/:id", deleteTodo);

export default router;
