import express from "express";
import dotenv from "dotenv";
import { connectDb } from "./configs/db";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './configs/swagger';

//routes
import indexRouter from "./routes";

import { errorHandler } from "./middlewares/AppError";


const app = express();

//load từ .env
dotenv.config();

const port = process.env.PORT;

app.use(express.json());

//load database
connectDb();

//swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

//routes
app.use("/api", indexRouter);

//middle ware
app.use(errorHandler);

//listen trên server 3000
app.listen(port, () => {
    console.log(`The server is running on ${port}`);
    console.log("Swagger docs on http://localhost:3000/docs");
})

