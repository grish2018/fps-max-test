import styles from './notesList.module.scss'
import NotesListItem from './../notesListItem/NotesListItem'
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import { notesList } from './../../store/modules/notes/selectors'
import { useEffect } from 'react'


export default function NotesList() {
    const notes = useSelector(notesList);
    let headerDots = [{ id: 1, color: '#fb6355' }, { id: 2, color: '#febc2d' }, { id: 3, color: '#23cb3d' }]
    let history = useHistory();

    useEffect(() => {
        if (!notes.length) {
            history.push('/create_note')
        }
    }, []);
    return (
        <div className={styles.notesList}>
            <div className={styles.notesList__header}>
                {
                    headerDots.map(item => (
                        <div key={item.id} className={styles.notesList__headerDot} style={{ background: `${item.color}` }}></div>
                    ))
                }
            </div>
            <div className={styles.notesList__itemsWrapper}>
                <div className={styles.notesList__items}>
                    {
                        notes.map(item => (
                            <NotesListItem key={item.id} note={item} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}