import React from "react";

const Note = ({ content, toggleNote, done }) => {
    return (
        <li>
            <div>
                {done ? <s>{content}</s> : content}
                <span> </span>
                <button onClick={toggleNote}>{done ? 'set undone' : 'set done'}</button>
            </div>
        </li>
    )
}

export default Note
