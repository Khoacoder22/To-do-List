import * as ToListItemsController from "../controllers/to-do-list-items.controller";
import { Router } from "express";

const ToListItems = Router();

//To do list items

/**
 * @openapi
 * /api/ToDoListItems/{to_do_group_id}:
 *   post:
 *     summary: Tạo mới TodoItem trong một ToDoList
 *     description: Tạo một công việc (TodoItem) gắn với một TodoList theo ID
 *     tags:
 *       - To Do List Items
 *     parameters:
 *       - in: path
 *         name: to_do_group_id
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
 *             required:
 *               - name
 *               - to_do_group_id
 *             properties:
 *               to_do_group_id:
 *                 type: string
 *                 example: "68bd8ccccb864b46d0e1c62a"
 *               name:
 *                 type: string
 *                 example: "Hoàn thành báo cáo tuần"
 *               des:
 *                 type: string
 *                 example: "Làm báo cáo tuần cho nhóm dự án"
 *               due_at:
 *                 type: string
 *                 format: date-time
 *                 example: "2025-09-15T10:00:00.000Z"
 *     responses:
 *       201:
 *         description: Tạo thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                   example: "68bff907fd1ef423d30a7897"
 *                 to_do_group_id:
 *                   type: string
 *                   example: "68bd8ccccb864b46d0e1c62a"
 *                 name:
 *                   type: string
 *                   example: "Hoàn thành báo cáo tuần"
 *                 des:
 *                   type: string
 *                   example: "Làm báo cáo tuần cho nhóm dự án"
 *                 due_at:
 *                   type: string
 *                   format: date-time
 *                   example: "2025-09-15T10:00:00.000Z"
 *                 status:
 *                   type: string
 *                   enum: [todo, doing, done]
 *                   example: "todo"
 *                 createdAt:
 *                   type: string
 *                   example: "2025-09-09T09:53:11.102Z"
 *                 updatedAt:
 *                   type: string
 *                   example: "2025-09-09T09:53:11.102Z"
 *                 __v:
 *                   type: integer
 *                   example: 0
 *       400:
 *         description: Lỗi tạo mới (ví dụ ObjectId sai hoặc dữ liệu thiếu)
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Cast to ObjectId failed for value ..."
 */
ToListItems.post("/:to_do_group_id", ToListItemsController.createTodolistItemHanlder);

/**
 * @openapi
 * /api/ToDoListItems/{id}:
 *   get:
 *     summary: Lấy danh sách To do Items theo ToDoList ID
 *     description: Trả về tất cả To do Items thuộc một ToDoList
 *     tags:
 *       - To Do List Items
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của ToDoList
 *     responses:
 *       200:
 *         description: Danh sách To do Items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "68bd8ece45c8c2fe5850c6ca"
 *                   to_do_group_id:
 *                     type: string
 *                     example: "68bd8ccccb864b46d0e1c62a"
 *                   name:
 *                     type: string
 *                     example: "Đọc tài liệu cơ bản"
 *                   des:
 *                     type: string
 *                     example: "Đọc về interface, enum, generic"
 *                   due_at:
 *                     type: string
 *                     format: date-time
 *                     example: "2025-09-08T00:00:00.000Z"
 *                   status:
 *                     type: string
 *                     enum: [todo, doing, done]
 *                     example: "todo"
 *                   createdAt:
 *                     type: string
 *                     example: "2025-09-07T13:55:26.033Z"
 *                   updatedAt:
 *                     type: string
 *                     example: "2025-09-07T13:55:26.033Z"
 *                   __v:
 *                     type: integer
 *                     example: 0
 *             example:
 *               - _id: "68bd8ece45c8c2fe5850c6ca"
 *                 to_do_group_id: "68bd8ccccb864b46d0e1c62a"
 *                 name: "Đọc tài liệu cơ bản"
 *                 des: "Đọc về interface, enum, generic"
 *                 due_at: "2025-09-08T00:00:00.000Z"
 *                 status: "todo"
 *                 createdAt: "2025-09-07T13:55:26.033Z"
 *                 updatedAt: "2025-09-07T13:55:26.033Z"
 *                 __v: 0
 *               - _id: "68bd91a8d392140f723915a8"
 *                 to_do_group_id: "68bd8ccccb864b46d0e1c62a"
 *                 name: "Đọc tài liệu cơ bản"
 *                 des: "Đọc về interface, enum, generic"
 *                 due_at: "2025-09-08T00:00:00.000Z"
 *                 status: "todo"
 *                 createdAt: "2025-09-07T14:07:36.864Z"
 *                 updatedAt: "2025-09-07T14:07:36.864Z"
 *                 __v: 0
 *               - _id: "68bff907fd1ef423d30a7897"
 *                 to_do_group_id: "68bd8ccccb864b46d0e1c62a"
 *                 name: "Hoàn thành báo cáo tuần"
 *                 des: "Làm báo cáo tuần cho nhóm dự án"
 *                 due_at: "2025-09-15T10:00:00.000Z"
 *                 status: "todo"
 *                 createdAt: "2025-09-09T09:53:11.102Z"
 *                 updatedAt: "2025-09-09T09:53:11.102Z"
 *                 __v: 0
 *       404:
 *         description: Không tìm thấy ToDoList hoặc không có TodoItem nào
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "No TodoItems found for this ToDoList"
 */
ToListItems.get("/:id", ToListItemsController.getTodolistItemsHanlder);

// openapi: 3.0.0
// info:
//   title: ToDo List Items API
//   version: 1.0.0

// paths:
//   /api/ToDoListItems:
//     post:
//       summary: Create new Todo Item
//       tags:
//         - ToDoListItems
//       requestBody:
//         required: true
//         content:
//           application/json:
//             schema:
//               $ref: "#/components/schemas/TodoItemInput"
//       responses:
//         "201":
//           description: Todo item created
//           content:
//             application/json:
//               schema:
//                 $ref: "#/components/schemas/TodoItem"

//   /api/ToDoListItems/{id}:
//     get:
//       summary: Get Todo Item by ID
//       tags:
//         - ToDoListItems
//       parameters:
//         - name: id
//           in: path
//           required: true
//           schema:
//             type: string
//       responses:
//         "200":
//           description: Todo item found
//           content:
//             application/json:
//               schema:
//                 $ref: "#/components/schemas/TodoItem"
//         "404":
//           description: Item not found

//     put:
//       summary: Update Todo Item by ID
//       tags:
//         - ToDoListItems
//       parameters:
//         - name: id
//           in: path
//           required: true
//           schema:
//             type: string
//       requestBody:
//         required: true
//         content:
//           application/json:
//             schema:
//               $ref: "#/components/schemas/TodoItemInput"
//       responses:
//         "200":
//           description: Updated successfully
//           content:
//             application/json:
//               schema:
//                 $ref: "#/components/schemas/TodoItem"
//         "400":
//           description: Invalid request
//           content:
//             application/json:
//               schema:
//                 $ref: "#/components/schemas/Error"

//     delete:
//       summary: Delete Todo Item by ID
//       tags:
//         - ToDoListItems
//       parameters:
//         - name: id
//           in: path
//           required: true
//           schema:
//             type: string
//       responses:
//         "200":
//           description: Deleted successfully
//         "404":
//           description: Item not found

// components:
//   schemas:
//     TodoItem:
//       type: object
//       properties:
//         _id:
//           type: string
//           example: "68bff907fd1ef423d30a7897"
//         to_do_group_id:
//           type: string
//           example: "68bd8ccccb864b46d0e1c62a"
//         name:
//           type: string
//           example: "Hoàn thành báo cáo tuần"
//         des:
//           type: string
//           example: "Làm báo cáo tuần cho nhóm dự án"
//         due_at:
//           type: string
//           format: date-time
//           example: "2025-09-15T10:00:00.000Z"
//         status:
//           type: string
//           enum: [todo, doing, done]
//           example: "todo"
//         createdAt:
//           type: string
//           format: date-time
//         updatedAt:
//           type: string
//           format: date-time
//         __v:
//           type: integer

//     TodoItemInput:
//       type: object
//       required:
//         - to_do_group_id
//         - name
//       properties:
//         to_do_group_id:
//           type: string
//           example: "68bd8ccccb864b46d0e1c62a"
//         name:
//           type: string
//           example: "Hoàn thành báo cáo tuần"
//         des:
//           type: string
//           example: "Làm báo cáo tuần cho nhóm dự án"
//         due_at:
//           type: string
//           format: date-time
//           example: "2025-09-15T10:00:00.000Z"
//         status:
//           type: string
//           enum: [todo, doing, done]

//     Error:
//       type: object
//       properties:
//         message:
//           type: string
//           example: "Invalid status: finisdh"
ToListItems.put("/:id", ToListItemsController.updateTodo);


ToListItems.delete("/:id", ToListItemsController.deleteTodo);

export default ToListItems;