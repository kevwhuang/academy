import controller from './controller.mjs';
import express from 'express';

const router = express.Router();

export default router;

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.remove);
