import TodoItem from './TodoItem';

function TodoList({ todoList, handleTodoClick }) {
    
  return (
    <ul>
        {
            todoList.map((todo, index) => {
                return <TodoItem 
                           todo={ todo }
                           key={ index }
                           index={ index }
                           handleTodoClick={ handleTodoClick }  
                       />        
            })
        }
    </ul>
  )
}

export default TodoList
