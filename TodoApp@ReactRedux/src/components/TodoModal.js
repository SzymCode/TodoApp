import React, { useState } from 'react';

import { addTodo } from '../slices/todoSlice';

import { v4 as uuid } from 'uuid';
import { Modal, Button, FormControl, Select, MenuItem, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

function TodoModal() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('incomplete');
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
      setTitle('');
      setDescription('');
      setStatus('incomplete')
      setIsOpen(true);
  };
  const handleClose = () => { setIsOpen(false); };


   const handleSubmit = () => {
       console.log("Title:", title);
    console.log("Status:", status);
    if (title === '') {
      toast.error('Please enter a title');
      return;
    }
    if (title && status) {
        dispatch(
          addTodo({ id: uuid(), title, status, description, time: new Date().toLocaleString() })
        );
        toast.success('Task added successfully');
      setIsOpen(false);
    }
  };

  return (
    <>
      <Button onClick={ handleOpen } variant="contained">
        Add Task
      </Button>

      <Modal open={ isOpen } onClose={ handleClose }>
        <div className="todoModal">
          <form onSubmit={ handleSubmit }>

            <h1 className="modalTitle" id="modal-title">
              Create new task!
            </h1>

            <label className="inputTitle">
              Title
            </label>
            <div className="textAlignCenter">
              <textarea id="title" value={ title } className="taskTitleInput" onChange={ (e) => setTitle(e.target.value) }/>
            </div>

            <label className="inputDescription">
                Description
            </label>
            <div className="textAlignCenter">
              <textarea id="description" value={ description }  className="taskDescriptionInput" onChange={ (e) => setDescription(e.target.value) }/>
            </div>

            <FormControl>
              <label className="statusSelectTitle" id="status-label" defaultValue="incomplete">
                Status
              </label>
              <Select id="type" value={ status } className="addTaskSelect todoSelect" labelId="status-label" onChange={ (e) => setStatus(e.target.value) }>
                <MenuItem value="incomplete">
                    Incomplete
                </MenuItem>
                <MenuItem value="complete">
                    Completed
                </MenuItem>
              </Select>
            </FormControl>

            <div className="modalButtons">
              <Button onClick={ handleClose } variant="contained" className="modalButton" style={ styles.closeButton }>
                Close
              </Button>
              <Button type="submit" variant="contained"  className="submitButton" style={ styles.submitButton }>
                Submit
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
    background: "grey",
    marginRight: 15
  }
}