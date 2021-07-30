import React from "react";
import Todo from "../models/todo";
//A functional component out of a box can be converted
//to generic funbction

//FC = is a function and acts as functional component
//merge our own object with the base object type(props)      
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul>
            {props.items.map((item) => {
                return <li>{item.text}</li>
            })}
        </ul>
    );
}

export default Todos;