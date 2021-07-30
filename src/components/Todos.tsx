import React from "react";
//A functional component out of a box can be converted
//to generic funbction

//FC = is a function and acts as functional component
//merge our own object with the base object type(props)      
const Todos: React.FC<{items: string[]}> = (props) => {
    return (
        <ul>
        </ul>
    );
}

export default Todos;