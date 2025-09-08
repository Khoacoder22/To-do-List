import express from "express";
import { createTodolistHanlder, deleteTodoHandler, getTodohandler, updateHandler } from "../controllers/ToList";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: TodoList
 *   description: API quản lý danh sách việc cần làm
 */

/**
 * @swagger
 * /todo/{user_id}:
 *   post:
 *     summary: Tạo mới một TodoList theo User
 *     tags: [TodoList]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Công việc trong ngày
 *     responses:
 *       201:
 *         description: TodoList được tạo thành công
 *       400:
 *         description: Lỗi request
 */
router.post("/:user_id", createTodolistHanlder);

/**
 * @swagger
 * /todo/{id}:
 *   get:
 *     summary: Lấy thông tin TodoList theo ID
 *     tags: [TodoList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của TodoList
 *     responses:
 *       200:
 *         description: Thông tin TodoList
 *       404:
 *         description: Không tìm thấy TodoList
 */
router.get("/:id", getTodohandler);

/**
 * @swagger
 * /todo/{id}:
 *   put:
 *     summary: Cập nhật TodoList theo ID
 *     tags: [TodoList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của TodoList
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: Công việc đã chỉnh sửa
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *       404:
 *         description: Không tìm thấy TodoList
 */
router.put("/:id", updateHandler);

/**
 * @swagger
 * /todo/{id}:
 *   delete:
 *     summary: Xóa TodoList theo ID
 *     tags: [TodoList]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của TodoList
 *     responses:
 *       200:
 *         description: Xóa thành công
 *       404:
 *         description: Không tìm thấy TodoList
 */
router.delete("/:id", deleteTodoHandler);

export default router;
