import { configureStore } from '@reduxjs/toolkit';
import { announcementsReducer } from '../features/announcements/announcementSlice';

export const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
  },
});
