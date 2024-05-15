import React from 'react'

function ClearGroup({ handleDeleteId, handleDeleteTodo, handleDeleteTodos}) {
  return (
    <div className="clear-group">
        <input onChange={ handleDeleteId } type="number" />
        <button onClick={ handleDeleteTodo }>Delete</button>
        <button onClick={ handleDeleteTodos }>Clear</button>
    </div>
  )
}

export default ClearGroup;
