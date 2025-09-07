import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./configs/db";
import todoRoute from "../src/routes/todoRoute";
import todoListRoute from "../src/routes/todoListRoute"
import { errorHandler } from "./middlewares/AppError";

const app = express();

//load từ .env
dotenv.config();

const port = process.env.PORT;

app.use(express.json());

//load database
connectDb();

//routes
app.use("/api/todoitems", todoRoute);
app.use("/api/todo", todoListRoute);


//middle ware
app.use(errorHandler);

//listen trên server 3000
app.listen(port, () => {
    console.log(`The server is running on ${port}`);
})

