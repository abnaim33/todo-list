import React from 'react';
import Todo from './Todo'
const TodoList = ({ todos, toggleComplete, removeTodo }) => {


    return (
        <ul>
            {
                todos.map(todo => (
                    <Todo key={todo.id} toggleComplete={toggleComplete} todo={todo} removeTodo={removeTodo}></Todo>
                ))
            }
        </ul>
    );
};

export default TodoList;