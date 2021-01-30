import styles from './noteItem.module.scss'
import Form from './../form/Form.js'
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentNote, getEditMode } from './../../store/modules/notes/selectors'
import { setCurrentNote, updateNote } from './../../store/modules/notes/actions'
import { useEffect } from 'react'


export default function NoteItem() {
    let { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentNote(id))
    }, [id]);

    const currentNote = useSelector(getCurrentNote);
    const editMode = useSelector(getEditMode)

    const submitHandler = (payload) => {
        dispatch(updateNote(payload))
    }

    return (editMode ? (
        <div className={styles.noteItem}>
            <Form currentNote={currentNote} submitFunction={submitHandler} />
        </div>
    ) : (
            <div className={styles.noteItem}>
                <span className={styles.noteItem__title}># {currentNote.title}</span>
                <div className={styles.noteItem__content}>
                    <p className={styles.noteItem__body}>{currentNote.body}</p>
                </div>
            </div>
        )

    )
}