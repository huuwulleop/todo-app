import React from "react";

const Note = ({ content, done, toggleNote, deleteNote }) => {
    return (
        <li>
            <div>
                <button onClick={deleteNote}>delete</button>
                <span> </span>
                <button onClick={toggleNote}>{done ? 'set undone' : 'set done'}</button>
                <span> </span>
                {done ? <s>{content}</s> : content}
            </div>
        </li>
    )
}

export default Note
