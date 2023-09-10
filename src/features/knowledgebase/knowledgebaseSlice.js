import { PLANTS } from "../../assets/data/plantData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    knowledgebaseArray: PLANTS
};

const knowledgebaseSlice = createSlice({
    name: 'knowledgebase',
    initialState
})

export const selectAllEntries = (state) => {
    return state.knowledgebase.knowledgebaseArray;
};

export const knowledgebaseReducer = knowledgebaseSlice.reducer;

export const selectEntriesByType = (type) => (state) => {
    return state.knowledgebase.knowledgebaseArray.filter((item) => item.type === type);
};