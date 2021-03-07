import './todoform.css'
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });
    function hendleInputChange(e) {
        setTodo({
            ...todo, task: e.target.value
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() })

            setTodo({ ...todo, task: "" })
        }
    }
    return (
        <div>

            <form className="container" action="" onSubmit={handleSubmit}>
                <input className="todo_container" placeholder="Add a todo" name="task" value={todo.task}
                    onChange={hendleInputChange} type="text" />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default TodoForm;