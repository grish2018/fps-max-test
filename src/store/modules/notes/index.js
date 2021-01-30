import { createReducer } from '../../reducer-helper';
import * as types from './types';
import initialState from './initialState';

const reducersMap = {
    [types.ADD_NOTE]: (state, action) => {
        return {
            ...state,
            notes: [...state.notes, action.payload]
        };
    },
    [types.DELETE_NOTE]: (state, action) => {
        const newNotes = state.notes.filter(note => note.id !== action.id)
        return {
            ...state,
            notes: [...newNotes]
        };
    },
    [types.SET_CURRENT_NOTE]: (state, action) => {
        const currentNote = state.notes.find(note => note.id === Number(action.id))
        return {
            ...state,
            currentNote: { ...currentNote }
        };
    },
    [types.TOGGLE_EDIT_MODE]: (state, action) => {
        return {
            ...state,
            editMode: action.state
        };
    },
    [types.UPDATE_NOTE]: (state, action) => {
        const { id } = state.currentNote
        const updatedCurrentNote = { ...state.currentNote, title: action.payload.title, body: action.payload.body }
        const updatedNotes = state.notes.map(note => note.id === id ? updatedCurrentNote : note)
        return {
            ...state,
            currentNote: { ...updatedCurrentNote },
            notes: [...updatedNotes],
            editMode: false
        };
    },
};

export default createReducer(initialState)(reducersMap);