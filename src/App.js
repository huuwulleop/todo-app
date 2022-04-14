import { useState } from 'react'

// components
import NoteForm from './components/NoteForm';

const App = () => {
  const [newNote, setNewNote] = useState('')
  
  const addNote = (event) => {
    event.preventDefault()
    console.log('event is clicked');
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
    </div>
  )
}

export default App;
