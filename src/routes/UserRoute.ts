import express from "express";
import { createUser, deleteUser, getAllUser, updateUser } from "../controllers/User";

const router = express.Router();

/**
 * @swagger
 * /api/user:
 *   post:
 *     summary: Create new user
 */
router.post("/", createUser);

/**
 * @swagger
 * /api/user/{id}:
 *   put:
 *     summary: Update user by ID
 */
router.put("/:id", updateUser);

/**
 * @swagger
 * /api/user/{id}:
 *   delete:
 *     summary: Delete user by ID
 */
router.delete("/:id", deleteUser);

/**
 * @swagger
 * /user/getAll:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     description: Returns a list of all users
 *     responses:
 *       200:
 *         description: List of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: 68be50c40f4b99747bdf651e
 *                   name:
 *                     type: string
 *                     example: Nguyen Van A
 *                   gender:
 *                     type: string
 *                     example: F
 *                   dob:
 *                     type: string
 *                     format: date
 *                     example: 1998-05-20
 *                   createdAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-09-08T03:43:00.270Z
 *                   updatedAt:
 *                     type: string
 *                     format: date-time
 *                     example: 2025-09-08T03:55:18.377Z
 */
router.get("/getAll", getAllUser);

export default router;
