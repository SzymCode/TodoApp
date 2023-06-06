import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { v4 as uuid } from 'uuid';
import { Modal, Button, FormControl, Select, MenuItem } from '@mui/material';
import { addTodo, updateTodo } from '../slices/todoSlice';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';

function TodoModal({ type, modalOpen, setModalOpen, todo }) {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (type === 'update' && todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setStatus(todo.status);
    }
    else {
      setTitle('');
      setDescription('');
      setStatus('incomplete');
    }
  }, [type, todo, modalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title && status) {
      if (type === 'add') {
        dispatch(
          addTodo({
            id: uuid(),
            title,
            description,
            status,
            time: new Date().toLocaleString(),
          })
        );
        toast.success('Task added successfully');
      }

      if (type === 'update') {
        if (todo.title !== title || todo.description !== description || todo.status !== status ) {
          dispatch(
              updateTodo({
                ...todo,
                title,
                description,
                status
              })
          );
          toast.success('Task Updated successfully');
        } else {
          toast.error('No changes made');
          return;
        }
      }
       setIsOpen(false);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="contained">
        {type === 'add' ? <AddIcon /> : <EditIcon />}
      </Button>

      <Modal open={isOpen} onClose={handleClose}>
        <div className="todoModal">
          <form onSubmit={handleSubmit}>
            <h1 className="modalTitle" id="modal-title">
              {type === 'add' ? 'Add' : 'Update'} task!
            </h1>

            <label className="inputTitle">
              Title
            </label>
            <div className="textAlignCenter">
              <textarea id="title" value={title} className="taskTitleInput" onChange={(e) => setTitle(e.target.value)}/>
            </div>

            <label className="inputDescription">Description</label>
            <div className="textAlignCenter">
              <textarea id="description" value={description} className="taskDescriptionInput" onChange={(e) => setDescription(e.target.value)}/>
            </div>

            <FormControl>
              <label className="statusSelectTitle" id="status-label" defaultValue="incomplete">
                Status
              </label>
              <Select id="type" value={status} className="addTaskSelect todoSelect" labelId="status-label" onChange={(e) => setStatus(e.target.value)}>
                <MenuItem value="incomplete">
                  Incomplete
                </MenuItem>
                <MenuItem value="complete">
                  Completed
                </MenuItem>
              </Select>
            </FormControl>

            <div className="modalButtons">
              <Button onClick={handleClose} variant="contained" className="modalButton" style={styles.closeButton}>
                <CloseIcon />
              </Button>
              <Button type="submit" variant="contained" className="submitButton" style={styles.submitButton} >
                {type === 'add' ? 'Add Task' : 'Update Task'}
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default TodoModal;

const styles = {
  closeButton: {
    background: 'grey',
    marginRight: 15,
  },
};
