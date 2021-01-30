import styles from './form.module.scss'
import { useState } from "react";

export default function Form({ currentNote, submitFunction }) {
    const [title, setTitle] = useState(currentNote?.title || '');
    const [body, setBody] = useState(currentNote?.body || '');
    const [valid, setValid] = useState(true)


    const inputTitletHandler = (e) => {
        setTitle(e.target.value);
    };
    const inputBodyHandler = (e) => {
        setBody(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const comment = {
            title,
            body,
            id: currentNote?.id
        };
        if (title.trim()) {
            submitFunction(comment)
            setTitle("");
            setBody("");
            setValid(true)
        } else {
            setValid(false)
        }
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <textarea
                className={valid ? styles.form__titleInput : styles.form__invalidTitleInput}
                type="text"
                placeholder="Введите Заголовок..."
                value={title}
                onChange={inputTitletHandler}
                autoFocus
            />
            <textarea
                className={styles.form__bodyInput}
                placeholder="Введите Заметку..."
                value={body}
                onChange={inputBodyHandler}
            />
            <input
                className={styles.form__button}
                type="submit"
                value="Сохранить" />
        </form>
    )
}