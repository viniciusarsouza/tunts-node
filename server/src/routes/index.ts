import { Router } from 'express';
import { getClassroomController } from '../useCases/getClassroom';

const routes = Router();

routes.get('/', getClassroomController.handle);

export default routes;
