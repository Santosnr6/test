import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todos from './assets/todos.json';
import { useState } from 'react';
import Counter from './components/Counter';

function App() {

  const [todoList, setTodoList] = useState([...todos]);

  const handleNewTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      task: event.target[0].value,
      done: false
    }
    setTodoList(t => [...t, newTodo]);
  }

  const handleTodoClick = (index) => {
    const newTodoList = [...todoList];
    newTodoList[index].done = !newTodoList[index].done;
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>My Todo App</h1>
      <TodoForm 
        handleNewTodo={ handleNewTodo } 
      />
      <TodoList 
        todoList={ todoList }
        handleTodoClick={ handleTodoClick }
      />
      <Counter />
    </div>
  )
}

export default App
