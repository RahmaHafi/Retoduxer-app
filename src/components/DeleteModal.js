import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import DetailTable from './DetailTable';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions/todosActionCreator';


function DeleteModal(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

  const handleConfirmation = (id) => {
    dispatch(deleteTodo(props.todo.id))
    props.history.push("/")
  }

  return (
    <>
      <i onClick={handleShow} className="bi bi-trash3-fill btn text-danger"></i>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete ToDo</Modal.Title>
        </Modal.Header>
        <p className="ms-2">Are you sure that you wanna delete this todo?</p>
        <Modal.Body>
          <DetailTable todo={props.todo} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleConfirmation}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal