import styles from './createNote.module.scss'
import Form from './../form/Form'
import { useDispatch } from 'react-redux';
import { addNote } from './../../store/modules/notes/actions'

export default function CreateNote() {
    const dispatch = useDispatch();

    const submitHandler = (payload) => {
        dispatch(addNote(payload))
    }
    return (
        <div className={styles.createNote}>
            <Form submitFunction={submitHandler} />
        </div>
    )
}