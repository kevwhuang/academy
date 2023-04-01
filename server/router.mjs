import express from 'express';

import controller from './controller.mjs';

const router = express.Router();

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.remove);

export default router;
