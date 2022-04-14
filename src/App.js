import { useState, useEffect } from 'react'

// components
import NoteForm from './components/NoteForm';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([
    { content: 'Do stuffs', id: 1 },
    { content: 'Make things', id: 2 }
  ])
  const [newNote, setNewNote] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    console.log('event is clicked');
    const noteObject = {
      content: newNote,
      id: notes.length + 1
    }
    
    setNewNote('')
  }

  const changeNote = (event) => {
    console.log(event.target.value);
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Add a new note</h1>
      <NoteForm addNote={addNote} newNote={newNote} changeNote={changeNote} />

      <h1>ToDo list</h1>
      <ul>
        {notes.length > 0
          ? notes.map(note => <li key={note.id}><Note content={note.content} /></li>)
          : 'Everything is done! :D'
        }
      </ul>
    </div>
  )
}

export default App;
