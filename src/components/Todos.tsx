import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css"
//A functional component out of a box can be converted
//to generic funbction

//FC = is a function and acts as functional component
//merge our own object with the base object type(props)      
const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={classes.todos}>
            {props.items.map((item) => {
                return <TodoItem key={item.id} text={item.text} />
            })}
        </ul>
    );
}

export default Todos;