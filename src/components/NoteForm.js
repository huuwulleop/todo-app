import React from "react";

const NoteForm = ({ addNote, newNote, changeNote }) => {
    return (
        <form onSubmit={addNote}>
            <input placeholder="add a new note..." value={newNote} onChange={changeNote} />
            <button type="submit">Add</button>
        </form>
    )
}

export default NoteForm
