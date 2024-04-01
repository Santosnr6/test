function TodoForm({ handleNewTodo }) {
  return (
    <form onSubmit={ handleNewTodo }>
        <input type="text" placeholder="New todo..."/>
        <input type="submit" value="Add" />
    </form>
  )
}

export default TodoForm;
