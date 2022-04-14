import React from "react";

const NoteForm = ({ addNote, newNoteContent, changeNote }) => {
    return (
        <form onSubmit={addNote}>
            <input placeholder="add a new note..." value={newNoteContent} onChange={changeNote} />
            <button type="submit">Add</button>
        </form>
    )
}

export default NoteForm
