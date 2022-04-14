import { useState } from 'react'

// components
import NoteForm from './components/NoteForm';

const App = () => {
  const addNote = (event) => {
    event.preventDefault()
    console.log('event is clicked');
  }
  
  return (
    <div>
      <h1>Add a new note</h1>
      <NoteForm addNote={addNote} />
      
      <h1>ToDo list</h1>
    </div>
  )
}

export default App;
