import toast from 'react-hot-toast';
import React from 'react';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';



function TodoItem({ todo }) {
  const dispatch = useDispatch();


  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };


  return (
    <>
      <div>
        <p>
          {todo.title}
        </p>
        <p>
          {todo.description}
        </p>
        <p>
          {todo.time}
        </p>
      </div>
      <div onClick={() => handleDelete()} onKeyDown={() => handleDelete()} tabIndex={0} role="button">
        <MdDelete />
      </div>
    </>
  );
}

export default TodoItem;