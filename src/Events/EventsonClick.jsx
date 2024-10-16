import React, {useState} from "react";

function EventsonClick(){
    const [inputvalue, setInputValue] = useState('');
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Submission prevented")
    };


    const handleEvent = (event) => {
        event.stopPropagation();
        console.log(`Event type: ${event.type}`);
        handleClick();
    }

    const handleChange = (event) => {
        setInputValue(event.target.value);
        console.log(event.target.value);
    }

    const handleClick = () => {
        alert("Button Clicked!");
    };

    return (
        <form onSubmit = {handleSubmit}>
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleEvent}>Click Me!</button>
            <button type="submit">Submit</button>
        </div>
        </form>
    );
}

export default EventsonClick;