import * as types from './types';

let idCounter = 0;
export const addNote = ({ title, body }) => ({ type: types.ADD_NOTE, payload: { title, body, id: ++idCounter } });
export const deleteNote = id => ({ type: types.DELETE_NOTE, id });
export const setCurrentNote = id => ({ type: types.SET_CURRENT_NOTE, id });
export const updateNote = ({ id, title, body }) => ({ type: types.UPDATE_NOTE, payload: { id, title, body } });
export const toggleEditMode = state => ({ type: types.TOGGLE_EDIT_MODE, state });
