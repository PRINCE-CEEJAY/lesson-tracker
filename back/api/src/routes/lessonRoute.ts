import {
  getLessons,
  getLessonById,
  createLesson,
  updateLesson,
  deleteLesson,
} from './../controllers/lessonController';
import { Router } from 'express';

const router = Router();

router.get('/', getLessons);
router.get('/:id', getLessonById);
router.post('/', createLesson);
router.put('/:id', updateLesson);
router.delete('/:id', deleteLesson);

export default router;
