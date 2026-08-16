import { db } from './../db/index';
import { Request, Response } from 'express';

export const getLessons = async (req: Request, res: Response) => {
  try {
    const users = await db.query.usersTable.findMany({
      with: {
        lessons: true,
      },
    });
    return res.status(200).json({ data: users });
  } catch (error) {
    return res.status(500).json({ message: 'Server Error' });
  }
};

export const getLessonById = async (req: Request, res: Response) => {
  try {
    const result = await db.query.usersTable.findFirst({
      where: { id: Number(req.params.id) },
      with: { lessons: true },
    });
    return res.status(200).json({ lesson: result });
  } catch (error) {
    return res.status(404).json({ message: 'Lessson not found' });
  }
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
