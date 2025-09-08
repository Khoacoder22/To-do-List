import swaggerJsdoc  from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "TodoList API",
        version: "1.0.0",
        description: "API documentation for TodoList app",
      },
      servers: [
        {
          url: "http://localhost:3000/api",
        },
      ],
    },
    apis: ["./src/routes/*.ts"], 
  };
  
  const swaggerSpec = swaggerJsdoc(options);
  
  export const setupSwagger = (app: Express) => {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  };