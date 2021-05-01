import { Router } from 'express';
import UserControllers from '../controllers/userControllers';

const router = Router();

const routerUser = new UserControllers();

router.get('/', routerUser.get);
router.post('/seja', routerUser.post);

export default router;