import { ANNOUNCEMENTS } from "../../assets/data/announcementData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    announcementsArray: ANNOUNCEMENTS
};

const announcementsSlice = createSlice({
    name: 'announcements',
    initialState
})

export const selectAnnouncements = (state) => {
    return state.announcements.announcementsArray;
};

export const announcementsReducer = announcementsSlice.reducer;

