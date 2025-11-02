import express from 'express';
const router = express.Router();
import { createUser, updateUser, readAllUsers, deleteUser, deleteAllUsers } from '../controllers/user-controller';

router.post('/create', createUser);
router.post('/update', updateUser);
router.get('/readAll', readAllUsers);
router.delete('/delete', deleteUser);
router.delete('/deleteAll', deleteAllUsers);

export default router;