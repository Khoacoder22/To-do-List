import { Router } from "express";
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from '../configs/swagger';

const swaggerRouter = Router();

swaggerRouter.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default swaggerRouter;
