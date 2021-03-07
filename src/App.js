import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const LOCAL_STORAGE_KEY = "react-todo-list-todos"
function App() {
  const [todos, setTodos] = useState([])

  function addTodo(todo) {
    setTodos([todo, ...todos]);

  }
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storageTodos) {
      setTodos(storageTodos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  function toggleComplete(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo, complete: !todo.completed
        };
      }
      return todo;
    }

    ))
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  return (
    <div className="app">

      <h1>this is todo lists</h1>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}></TodoList>

    </div>
  );
}

export default App;
