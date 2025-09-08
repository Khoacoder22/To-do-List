import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./configs/db";

//routes
import indexRouter from "../src/routes/indexRouter";

import { errorHandler } from "./middlewares/AppError";

import { setupSwagger } from "./configs/swagger";


const app = express();

//load từ .env
dotenv.config();

const port = process.env.PORT;

app.use(express.json());

//load database
connectDb();

//routes
app.use("/api", indexRouter);

//middle ware
app.use(errorHandler);

//swagger docs
setupSwagger(app);

//listen trên server 3000
app.listen(port, () => {
    console.log(`The server is running on ${port}`);
    console.log("Swagger docs on http://localhost:3000/docs");
})

