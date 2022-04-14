import React from "react";

const Note = ({ content, done, toggleNote, deleteNote }) => {
    return (
        <li>
            <div>
                {done ? <s>{content}</s> : content}
                <span> </span>
                <button onClick={toggleNote}>{done ? 'set undone' : 'set done'}</button>
                <button onClick={deleteNote}>delete</button>
            </div>
        </li>
    )
}

export default Note
