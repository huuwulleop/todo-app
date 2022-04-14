import React from "react";

const Note = ({ content, toggleNote }) => {
    return (
        <li>
            <div>
                {content}
                <span> </span>
                <button onClick={toggleNote}>toggle</button>
            </div>
        </li>
    )
}

export default Note
