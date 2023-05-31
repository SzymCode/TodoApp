import React from 'react';

function TodoItem({ todo }) {
  return (
    <div key={ todo.id } className="todoItem">
      <p>
        { todo.title }
      </p>
      <p>
        { todo.description }
      </p>
      <p>
        { todo.status }
      </p>
      <p>
        { todo.time }
      </p>
    </div>
  );
}

export default TodoItem;