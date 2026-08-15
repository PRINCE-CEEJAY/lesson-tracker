import { lessonSlice } from './../features/lessons/slices/lessonSlice';
import { configureStore } from '@reduxjs/toolkit';
import lessonReducer from "../features/lessons/slices/lessonSlice"
export const store = configureStore({
  reducer: {
    lesson: lessonReducer,
  },
});
