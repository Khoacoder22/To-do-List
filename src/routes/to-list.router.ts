import * as ToDoListController from "../controllers/to-do-list.controller";
import { Router } from "express";

const ToList = Router();

//To do list

/**
 * @openapi
 * /api/ToDoList/{user_id}:
 *  post:
 *    summary: Create new To do List item
 *    description: Thêm một công việc mới vào danh sách ToDoList của user
 *    tags:
 *      - To Do List
 *    parameters:
 *      - in: path
 *        name: user_id
 *        required: true
 *        schema:
 *          type: string
 *        description: ID của user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *            properties:
 *              name:
 *                type: string
 *                description: Tên công việc
 *          example:
 *            name: "Doing task 1"
 *    responses:
 *      201:
 *        description: Tạo ToDoList item thành công
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                name:
 *                  type: string
 *                user_id:
 *                  type: string
 *                status:
 *                  type: string
 *                  enum: [unfinished, finished]
 *                createdAt:
 *                  type: string
 *                  format: date-time
 *                updatedAt:
 *                  type: string
 *                  format: date-time
 *                __v:
 *                  type: integer
 *            example:
 *              name: "Doing task 1"
 *              user_id: "68be8ebc6319fca3c8844532"
 *              status: "unfinished"
 *              _id: "68bfebfaf0f8421a7005d166"
 *              createdAt: "2025-09-09T08:57:30.235Z"
 *              updatedAt: "2025-09-09T08:57:30.235Z"
 *              __v: 0
 *      400:
 *        description: Lỗi khi tạo ToDoList item
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *            example:
 *              message: "User not found"
 */
ToList.post("/:user_id", ToDoListController.createTodolistHanlder);
//lấy theo user_id 
/**
 * @openapi
 * /api/ToDoList/{id}:
 *   get:
 *     summary: Take to do lists by user_id
 *     description: Trả về toàn bộ danh sách ToDo của một user dựa trên user_id
 *     tags:
 *       - To Do List
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của user
 *     responses:
 *       200:
 *         description: Danh sách ToDo của user
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   user_id:
 *                     type: string
 *                   status:
 *                     type: string
 *                     enum: [unfinished, finished]
 *                   createdAt:
 *                     type: string
 *                   updatedAt:
 *                     type: string
 *                   __v:
 *                     type: integer
 *             example:
 *               - _id: "68bd8b7acb864b46d0e1c628"
 *                 name: "Học TypeScript"
 *                 user_id: "64f8b71e0d7a3b0012a1f9c3"
 *                 status: "unfinished"
 *                 createdAt: "2025-09-07T13:41:14.029Z"
 *                 updatedAt: "2025-09-07T13:41:14.029Z"
 *                 __v: 0
 *               - _id: "68bd8ccccb864b46d0e1c62a"
 *                 name: "Học TypeScript"
 *                 user_id: "64f8b71e0d7a3b0012a1f9c3"
 *                 status: "unfinished"
 *                 createdAt: "2025-09-07T13:46:52.372Z"
 *                 updatedAt: "2025-09-07T13:46:52.372Z"
 *                 __v: 0
 *       400:
 *         description: Invalid user_id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Invalid user_id"
 *       404:
 *         description: Không tìm thấy ToDo cho user này
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "No To Do found for this user"
 */
ToList.get("/:id", ToDoListController.getTodohandler);

/**
 * @openapi
 * /site/ToDoList/{id}:
 *   put:
 *     summary: Update to do 
 *     description: Cập nhật tên hoặc trạng thái của một ToDo bằng id
 *     tags:
 *       - To Do List
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của ToDo cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên mới của ToDo
 *               status:
 *                 type: string
 *                 enum: [unfinished, finished]
 *                 description: Trạng thái công việc
 *           example:
 *             name: "Doing task 2"
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 user_id:
 *                   type: string
 *                 status:
 *                   type: string
 *                   enum: [unfinished, finished]
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *                 __v:
 *                   type: integer
 *             example:
 *               _id: "68bd8ccccb864b46d0e1c62a"
 *               name: "Doing task 2"
 *               user_id: "64f8b71e0d7a3b0012a1f9c3"
 *               status: "unfinished"
 *               createdAt: "2025-09-07T13:46:52.372Z"
 *               updatedAt: "2025-09-09T09:19:38.316Z"
 *               __v: 0
 *       400:
 *         description: Invalid request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Invalid input data"
 *       404:
 *         description: Không tìm thấy ToDo với id này
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ToDo not found"
 */
ToList.put("/:id", ToDoListController.updateHandler);

/**
 * @openapi
 * /site/ToDoList/{id}:
 *   delete:
 *     summary: Delete to do
 *     description: Xóa một ToDo theo id
 *     tags:
 *       - To Do List
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của ToDo cần xóa
 *     responses:
 *       200:
 *         description: Xóa thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 deleted:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     name:
 *                       type: string
 *                     user_id:
 *                       type: string
 *                     status:
 *                       type: string
 *                       enum: [unfinished, finished]
 *                     createdAt:
 *                       type: string
 *                     updatedAt:
 *                       type: string
 *                     __v:
 *                       type: integer
 *             example:
 *               message: "ToDo deleted"
 *               deleted:
 *                 _id: "68bd8ccccb864b46d0e1c62a"
 *                 name: "Doing task 2"
 *                 user_id: "64f8b71e0d7a3b0012a1f9c3"
 *                 status: "unfinished"
 *                 createdAt: "2025-09-07T13:46:52.372Z"
 *                 updatedAt: "2025-09-09T09:19:38.316Z"
 *                 __v: 0
 *       404:
 *         description: Không tìm thấy ToDo với id này
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "ToDo not found"
 */
ToList.delete("/:id", ToDoListController.deleteTodoHandler);

export default ToList;