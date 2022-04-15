import React from "react";

const Note = ({ content, done, toggleNote, deleteNote }) => {
    return (
        <li>
            <div>
                <button onClick={deleteNote}>delete</button>
                <span> </span>
                <label>
                    <input type='checkbox' onChange={toggleNote} checked={done} />
                    <span> </span>
                    {done ? <s>{content}</s> : content}
                </label>
            </div>
        </li>
    )
}

export default Note
