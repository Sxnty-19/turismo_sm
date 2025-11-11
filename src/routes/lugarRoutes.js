import express from 'express';
import {
  getLugares,
  getLugarById,
  createLugar,
  updateLugar,
  deleteLugar
} from '../controllers/lugarController.js';

const router = express.Router();

router.get('/', getLugares);
router.get('/:id', getLugarById);
router.post('/', createLugar);
router.put('/:id', updateLugar);
router.delete('/:id', deleteLugar);

export default router;