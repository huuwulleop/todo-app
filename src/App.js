import { useState } from 'react'

// components
import NoteForm from './components/NoteForm';

const App = () => {
  return (
    <div>
      <h1>Add a new note</h1>
      <NoteForm />
      
      <h1>ToDo list</h1>
    </div>
  )
}

export default App;
