import React from "react";

const NoteForm = ({ addNote }) => {
    return (
        <form onSubmit={addNote}>
            <input placeholder="add a new note..." />
            <button type="submit">Add</button>
        </form>
    )
}

export default NoteForm
