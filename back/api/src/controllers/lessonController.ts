import { Request, Response } from 'express';

export const getLessons = (req: Request, res: Response) => {
  return res.json({ lessons: 'Available lessons here' });
};

export const getLessonById = (req: Request, res: Response) => {
  return res.json({ lesson: `The Lesson with the id ${req.params.id}` });
};

export const createLesson = (req: Request, res: Response) => {
  return res.json({ lessons: `Lesson Created Successfully ${req.body}` });
};

export const updateLesson = (req: Request, res: Response) => {
  return res.json({
    lessons: `Lesson with the ID ${req.params.id} updated Successfully`,
  });
};

export const deleteLesson = (req: Request, res: Response) => {
  return res.json({
    lessons: `Lesson with the ID ${req.params.id} deleted Successfully`,
  });
};
