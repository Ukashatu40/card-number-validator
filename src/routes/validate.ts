import { Router } from 'express';
import { ValidateController } from '../controllers/validateController';

const router = Router();
const validateController = new ValidateController();

router.post('/validate', validateController.handleValidation);

export default router;
