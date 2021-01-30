import { createSelector } from 'reselect'

const notesListSelector = (state) => state.notes.notes;
export const currentNoteSelector = (state) => state.notes.currentNote;
export const editModeSelector = (state) => state.notes.editMode;

export const notesList = createSelector(
    notesListSelector,
    items => items
)
export const getCurrentNote = createSelector(
    currentNoteSelector,
    items => items
)
export const getEditMode = createSelector(
    editModeSelector,
    items => items
)