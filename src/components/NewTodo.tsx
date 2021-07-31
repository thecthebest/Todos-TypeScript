import React from "react";
import { useRef } from "react";

const NewTodo: React.FC<{}> = () => {
    //Ref is a generic type out of the box
    //It is required to inform what type of data is stored
    //use <> to explicitly set the type of ref needed to be created
    //in this case the type is HTMLInputElement
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();
    };
    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="text">Todo Text</label>
            {/*ref out of a box could be assigned to other values null is needed*/}
            <input ref={todoTextInputRef} type="text" id="text"/>
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodo;