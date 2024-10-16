import React from "react";
import EventsonClick from "./EventsonClick";
import KeyboardEvent from "./KeyboardEvent";
import MouseEvent from "./MouseEvent";
import ItemList from "./ItemList";


function MainEvent (){
    return(
        <div>
            <EventsonClick />
            <KeyboardEvent />
            <MouseEvent />
            <ItemList />
        </div>
    );
}

export default MainEvent;