import { configureStore } from '@reduxjs/toolkit';
import imdbReducer from './imdbSlice';

export const store = configureStore({
  reducer: {
    imdb: imdbReducer
  },
})