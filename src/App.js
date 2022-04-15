import { useState, useEffect } from 'react'

import axios from 'axios';

// components
import NoteForm from './components/NoteForm';
import Note from './components/Note';

const App = () => {
  const [notes, setNotes] = useState([
    // { content: 'Do stuffs', id: 1 },
    // { content: 'Make things', id: 2 }
  ])
  const [newNoteContent, setNewNoteContent] = useState('')

  const dataFetch = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(res => {
        console.log('data fetched');
        setNotes(res.data)
      })
  }
  useEffect(dataFetch, [])

  const addNote = (event) => {
    event.preventDefault()
    console.log('event is clicked');
    const noteObject = {
      content: newNoteContent,
      done: false,
      id: notes.length + 1
    }

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(res => {
        setNotes(notes.concat(noteObject))
      })

    setNewNoteContent('')
  }

  const changeNote = (event) => {
    console.log(event.target.value);
    setNewNoteContent(event.target.value)
  }

  const toggleNoteOf = (id) => {
    const note = notes.find(note => note.id === id)
    const toggledNote = { ...note, done: !note.done }

    axios
      .put(`http://localhost:3001/notes/${id}`, toggledNote)
      .then(res => {
        setNotes(notes.map(note => note.id === id ? res.data : note))
      })
  }

  const deleteNoteOf = (id) => {
    const deletedNote = notes.find(note => note.id === id)
    const newNotes = notes.filter(note => note.id !== id)

    axios
      .delete(`http://localhost:3001/notes/${id}`, deletedNote)

    setNotes(newNotes)
  }

  const clearNotes = () => {
    console.log('cleared notes');

    notes.forEach(note => {
      axios
        .delete(`http://localhost:3001/notes/${note.id}`)
        .then(res => {
          console.log(res);
        })
    })
    setNotes([])
  }

  return (
    <div>
      <h1>Add a new note</h1>
      <NoteForm addNote={addNote} newNoteContent={newNoteContent} changeNote={changeNote} />

      <div>
        <h1>ToDo list</h1>
        <button onClick={clearNotes}>clear notes</button>
      </div>

      {
        notes.length > 0
          ? (
            <ul>
              {notes.map(note => (
                <Note
                  key={note.id}
                  content={note.content}
                  done={note.done}
                  toggleNote={() => toggleNoteOf(note.id)}
                  deleteNote={() => deleteNoteOf(note.id)}
                />
              ))}
            </ul>
          )
          : 'Everything is done! :D (for now)'
      }
    </div>
  )
}

export default App;
