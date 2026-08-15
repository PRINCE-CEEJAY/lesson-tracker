import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lessons: [
    {
      title: 'My first lesson',
      description:
        'I learnt how to loop with for loop in javascript and used it to solve some leetcode problems',
      date: Date.now(),
    },
  ],
};

export const lessonSlice = createSlice({
  name: 'lesson',
  initialState,
  reducers: {
    createLesson: (state, action) => {
      state.lessons.push(action.payload);
    },
  },
});

export const { createLesson } = lessonSlice.actions;
export default lessonSlice.reducer;
