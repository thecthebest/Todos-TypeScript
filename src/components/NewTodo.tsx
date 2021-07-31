import React from "react";
import { useRef } from "react";
import classes from "./NewTodo.module.css"
const NewTodo: React.FC<{onAddTodo: (text: string)=>void}> = (props) => {
    //Ref is a generic type out of the box
    //It is required to inform what type of data is stored
    //use <> to explicitly set the type of ref needed to be created
    //in this case the type is HTMLInputElement
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
        const eneteredText = todoTextInputRef.current!.value;
        //? may not be set to a value when it is used
        //! use only when it is sure that when this 
        //code is run the value is not null
        if (eneteredText.trim().length === 0) {
            return;
        }
        props.onAddTodo(eneteredText);
    };
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor="text">Todo Text</label>
            {/*ref out of a box could be assigned to other values null is needed*/}
            <input ref={todoTextInputRef} type="text" id="text"/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;