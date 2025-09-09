import * as UserController from "../controllers/user.controller";
import { Router } from "express";

const User = Router();

//User 

/**
 * @openapi
 * /api/users:
 *  post:
 *    summary: Create a user
 *    description: Thêm user mới
 *    tags:
 *      - Users
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *              - name
 *              - gender
 *              - dob
 *            properties:
 *              name:
 *                type: string
 *                description: Tên user
 *              gender:
 *                type: string
 *                enum: [M, F]
 *                description: Giới tính
 *              dob:
 *                type: string
 *                format: date
 *                description: Ngày sinh
 *          example:
 *            name: "khoa"
 *            gender: "F"
 *            dob: "2003-04-16"
 *    responses:
 *      200:
 *        description: Tạo user thành công
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *                name:
 *                  type: string
 *                gender:
 *                  type: string
 *                dob:
 *                  type: string
 *                  format: date-time
 *                createdAt:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                __v:
 *                  type: integer
 *            example:
 *              _id: "68bfd742bc6aaf6f21205c36"
 *              name: "khoa"
 *              gender: "F"
 *              dob: "2003-04-16T00:00:00.000Z"
 *              createdAt: "2025-09-09T07:29:06.474Z"
 *              updatedAt: "2025-09-09T07:29:06.474Z"
 *              __v: 0
 *      400:
 *        description: Invalid input
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *            example:
 *              message: "Invalid Gender"
 */
User.post("/", UserController.createUser);

/**
 * @openapi
 * /api/users/{id}:
 *   put:
 *     summary: Update a user
 *     description: Cập nhật thông tin user theo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của user cần update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - gender
 *               - dob
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên user
 *               gender:
 *                 type: string
 *                 enum: [M, F]
 *                 description: Giới tính
 *               dob:
 *                 type: string
 *                 format: date
 *                 description: Ngày sinh
 *           example:
 *             name: "josh"
 *             gender: "F"
 *             dob: "2003-04-16"
 *     responses:
 *       200:
 *         description: Cập nhật user thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 gender:
 *                   type: string
 *                 dob:
 *                   type: string
 *                   format: date-time
 *                 createdAt:
 *                   type: string
 *                 updatedAt:
 *                   type: string
 *                 __v:
 *                   type: integer
 *             example:
 *               _id: "68be50c40f4b99747bdf651e"
 *               name: "josh"
 *               gender: "F"
 *               dob: "2003-04-16T00:00:00.000Z"
 *               createdAt: "2025-09-08T03:43:00.270Z"
 *               updatedAt: "2025-09-09T07:38:50.233Z"
 *               __v: 0
 *       400:
 *         description: Invalid input
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "Invalid gender"
 *       500:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "User not found"
 */
User.put("/:id", UserController.updateUser);

/**
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user
 *     description: Xóa user theo ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của user cần xóa
 *     responses:
 *       200:
 *         description: Xóa user thành công
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "User deleted successfully"
 *       500:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *             example:
 *               message: "User not found"
 */
User.delete("/:id", UserController.deleteUser);

/**
 * @openapi
 * /api/users/:
 *  get:
 *    summary: Lấy danh sách tất cả users
 *    description: Trả về danh sách tất cả người dùng trong hệ thống
 *    tags:
 *      - Users
 *    responses:
 *      200:
 *        description: Danh sách users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                type: object
 *                properties:
 *                  _id:
 *                    type: string
 *                  name:
 *                    type: string
 *                  gender:
 *                    type: string
 *                    enum: [M, F]
 *                  dob:
 *                    type: string
 *                    format: date-time
 *                  createdAt:
 *                    type: string
 *                    format: date-time
 *                  updatedAt:
 *                    type: string
 *                    format: date-time
 *                  __v:
 *                    type: integer
 *            example:
 *              - _id: "68be8ebc6319fca3c8844532"
 *                name: "khoa"
 *                gender: "F"
 *                dob: "2003-04-16T00:00:00.000Z"
 *                createdAt: "2025-09-08T08:07:24.401Z"
 *                updatedAt: "2025-09-08T08:07:24.401Z"
 *                __v: 0
 *              - _id: "68be8fea5ba1c0a936ed99ef"
 *                name: "khoa 14"
 *                gender: "F"
 *                dob: "2003-04-16T00:00:00.000Z"
 *                createdAt: "2025-09-08T08:12:26.105Z"
 *                updatedAt: "2025-09-08T08:12:26.105Z"
 *                __v: 0
 */
User.get("/", UserController.getAllUser);

export default User;