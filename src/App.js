import styles from './app.module.scss';
import NotesList from './compnents/notesList/NotesList'
import NoteItem from './compnents/noteItem/NoteItem'
import CreateNote from './compnents/createNote/CreateNote'
import { Switch, Route } from "react-router-dom";


export default function App() {
  return (
    <div className={styles.app}>
      <Switch>
        <Route exact path='/' children={(
          <>
            <NotesList />
            <div></div>
          </>
        )} />
        <Route exact path='/create_note' children={(
          <>
            <NotesList />
            <CreateNote />
          </>
        )} />
        <Route exact path='/:id' children={(
          <>
            <NotesList />
            <NoteItem />
          </>
        )} />
      </Switch>
    </div>
  );
}

