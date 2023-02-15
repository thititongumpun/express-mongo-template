
import { Router } from 'express';

import { validate } from '../../../middlewares/validate';
import * as TodoHandlers from './todo.controller';
import { createTodoSchema } from './todo.schema';

export const router = Router();

router.get('/', TodoHandlers.findAll);
router.post('/', validate(createTodoSchema), TodoHandlers.createTodoHandler);