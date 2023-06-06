import toast from 'react-hot-toast';
import React, {  useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../slices/todoSlice';
import TodoModal from './TodoModal';


function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);


  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Todo Deleted Successfully');
  };

  const handleUpdate = () => {
    setUpdateModalOpen(true);
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
          {todo.status}
        </p>
        <p>
          {todo.time}
        </p>
      </div>
      <div>
        <div onClick={ () => handleDelete() } onKeyDown={ () => handleDelete() } tabIndex={0} role="button">
          <MdDelete />
        </div>
      </div>
      <TodoModal type="update" modalOpen={updateModalOpen} setModalOpen={setUpdateModalOpen} todo={todo}/>
    </>
  );
}

export default TodoItem;