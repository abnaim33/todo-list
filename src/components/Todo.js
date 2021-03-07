import React from 'react';
import './todo.css'
const Todo = ({ todo, toggleComplete, removeTodo }) => {
    function handleCheckboxClick() {
        toggleComplete(todo.id)
    }
    function handleRemoveClick() {
        removeTodo(todo.id)
    }
    return (
        <div className="todo_container" style={{ display: "flex" }}>
            <input type="checkbox" onClick={handleCheckboxClick} />
            <li>{todo.task}</li>
            <button title="delete" className="delete_button" onClick={handleRemoveClick}>X</button>

        </div>
    );
};

export default Todo;