import TodoList from "./components/TodoList";
import AddForm from "./components/AddForm";
import { useState, useEffect } from 'react';
import axios from 'axios';
import ClearGroup from "./components/ClearGroup";

const fetchTodos = (setTodoList) => {
  axios.get('http://localhost:8080/api/todos')
    .then(response => {
      setTodoList(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}

const addTodo = (setTodoList, todo) => {
  axios.post('http://localhost:8080/api/todos', todo)
    .then(response => {
      console.log(response);
      if(response.status === 201) {
        setTodoList(t => [...t, todo]);
        return true;
      }
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

const updateTodos = (setTodoList, todo) => {
  axios.put(`http://localhost:8080/api/todos/${todo.id}`, todo)
    .then(response => {
      console.log(response);
      if(response.status === 200) {
        setTodoList(t => t.map(t => t.id === todo.id ? todo : t));
        return true;
      }
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

const deleteTodo = (setTodoList, deleteId) => {
  axios.delete(`http://localhost:8080/api/todos/${deleteId}`)
    .then(response => {
      console.log(response);
      if(response.status === 200) {
        setTodoList(t => t.filter(t => t.id !== parseInt(deleteId)));
        return true;
      }
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

const deleteTodos = (setTodoList) => {
  axios.delete('http://localhost:8080/api/todos')
    .then(response => {
      console.log(response);
      if(response.status === 200) {
        setTodoList([]);
        return true;
      }
    })
    .catch(error => {
      console.error(error);
      return false;
    });
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [input, setInput] = useState('');
  const [deleteId, setDeleteId] = useState();

  useEffect(() => {
    fetchTodos(setTodoList);
  }, []);

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  const handleInput = (event) => {
    setInput(event.target.value);
  }

  const handleDeleteId = (event) => {
    setDeleteId(event.target.value);
  }

  const handleNewTodo = (event) => {
    event.preventDefault();
    const newTodo = {
      id : todoList.length + 1,
      task : input,
      done : false
    }
    addTodo(setTodoList, newTodo);
  }

  const handleTodoClick = (index) => {
    const newTodoList = [...todoList]; 
    newTodoList[index].done = !newTodoList[index].done;
    updateTodos(setTodoList, newTodoList[index])
  }

  const handleDeleteTodo = () => {
    deleteTodo(setTodoList, deleteId);
  }

  const handleDeleteTodos = () => {
    deleteTodos(setTodoList);
  }

  return (
    <section className="app">
      <h1>My Todo App</h1>
      <AddForm 
        handleNewTodo={ handleNewTodo }
        handleInput={ handleInput }
      />
      <TodoList 
        todoList={ todoList } 
        handleClick={ handleTodoClick }
      />

      <ClearGroup handleDeleteId={ handleDeleteId } handleDeleteTodo={ handleDeleteTodo } handleDeleteTodos={ handleDeleteTodos } />
    </section>
  )
}

export default App
