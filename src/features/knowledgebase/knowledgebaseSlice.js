import { PLANTS } from "../../assets/data/plantData";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    knowledgebaseArray: PLANTS,
    displayedEntry: 1
};

const knowledgebaseSlice = createSlice({
    name: 'knowledgebase',
    initialState, 
    reducers: {
        setDisplayedEntry: (state, action) => {
            return {
                ...state, displayedEntry: action.payload
            }}
    }
})


export const knowledgebaseReducer = knowledgebaseSlice.reducer;

export const selectAllEntries = (state) => {
    return state.knowledgebase.knowledgebaseArray;
};

export const selectEntriesByType = (type) => (state) => {
    return state.knowledgebase.knowledgebaseArray.filter((item) => item.type === type);
};

export const selectDisplayedEntry = (state) => {
    const n = state.knowledgebase.displayedEntry;
    return state.knowledgebase.knowledgebaseArray.find((item) => item.id === n);
}

export const { setDisplayedEntry } = knowledgebaseSlice.actions;