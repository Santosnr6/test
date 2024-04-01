function TodoItem({ todo, index, handleTodoClick }) {

  return (
    <li
        style={ { backgroundColor: todo.done ? 'green' : 'red' } }
        onClick={ () => handleTodoClick(index) }
    >
        { todo.task }
    </li>
  )
}

export default TodoItem;
