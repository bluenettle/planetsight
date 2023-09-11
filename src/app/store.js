import { configureStore } from '@reduxjs/toolkit';
import { announcementsReducer } from '../features/announcements/announcementSlice';
import { knowledgebaseReducer } from '../features/knowledgebase/knowledgebaseSlice';

export const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
    knowledgebase: knowledgebaseReducer,
  },
});
