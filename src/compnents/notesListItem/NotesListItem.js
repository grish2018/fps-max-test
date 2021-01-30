import styles from './notesListItem.module.scss'
import { withRouter, useHistory } from "react-router-dom";
import DotsVertical from './../../icons/DotsVertical'
import { useDispatch, useSelector } from 'react-redux';
import { deleteNote, toggleEditMode } from './../../store/modules/notes/actions'
import { notesList } from './../../store/modules/notes/selectors'

const NotesListItem = ({ note, location }) => {
    const dispatch = useDispatch()
    let history = useHistory();
    const notes = useSelector(notesList);

    const deleteCurrentNote = (id) => {
        dispatch(deleteNote(id))
        history.push('/create_note')
        if (notes.length > 1) {
            history.push('/')

        } else {
            history.push('/create_note')
        }
    }

    const toCreateNote = () => {
        history.push('/create_note')
    }

    const toCurrentNote = (id) => {
        dispatch(toggleEditMode(false))
        history.push(`/${id}`)
    }

    return (
        location.pathname === `/${note.id}` ? (
            <div className={styles.activeNotesListItem}>
                <span onClick={() => toCurrentNote(note.id)}>{note.title}</span>
                <div className={styles.activeNotesListItem__showContextMenu}>
                    <DotsVertical />
                    <div className={styles.activeNotesListItem__contextMenu}>
                        <div onClick={() => dispatch(toggleEditMode(true))} className={styles.activeNotesListItem__contextMenuItem}>
                            <span>Редактировать заметку</span>
                        </div>
                        <div onClick={() => deleteCurrentNote(note.id)} className={styles.activeNotesListItem__contextMenuItem}>
                            <span>Удалить заметку</span>
                        </div>
                        <div onClick={() => toCreateNote()} className={styles.activeNotesListItem__contextMenuItem}>
                            <span>Добавить заметку</span>
                        </div>
                    </div>
                </div>
            </div>
        ) : (
                <div className={styles.notesListItem}>
                    <span onClick={() => toCurrentNote(note.id)}>{note.title}</span>
                </div>
            )

    )
}

export default withRouter(NotesListItem)