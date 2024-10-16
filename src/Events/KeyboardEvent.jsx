import React from "react";

function KeyboardEvent () {
    const handleKeyDown = (event) => {
        if (event.key == "Enter") {
            alert("Enter key pressed")
        }
    };

    const handleKeyPressed = (event) => {
        console.log(`Key pressed: ${event.key}`);
    };

    return (
        <div>
            <input
            type = "text"
            placeholder="Type somethuing"
            onKeyDown={handleKeyDown}
            onKeyPress={handleKeyPressed}
            /> 
        </div>
    )

}

export default KeyboardEvent;