
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../redux/actions/todosActionCreator';

function UpdateTodo(props) {
    const idFromPath= props.match.params.id
    const todos=useSelector(state=>state.todos) 
    const todoToDisplay= todos.find((todo)=>todo.id ===idFromPath )
    
    const [title, setTitle] = useState( todoToDisplay?todoToDisplay.title:'')
    const [description, setDescription] = useState(todoToDisplay?todoToDisplay.description:'')
    const [userId,setUserId]= useState(todoToDisplay &&todoToDisplay.userId)
  
    const collaborators = useSelector(state => state.collaborators)

    const dispatch= useDispatch()
    
    const handleSubmit = (e) => {
      e.preventDefault()
      if (title.trim()) {
        dispatch(updateTodo(idFromPath, { title, description, userId }))
        props.history.push('/')
        }
  
      }
  
    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Todo Title</Form.Label>
            <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="What is your new todo Title ?" />
          </Form.Group>
          <Form.Label>Todo Description</Form.Label>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
          </Form.Group>
          <Form.Label>Collaborator</Form.Label>
          <Form.Select aria-label="Default select example" value={userId} onChange={(e)=>setUserId(e.target.value)}>
            <option value=''></option>
            {
              collaborators.map((collaborator) =>
  
                <option key={collaborator.id} value={collaborator.id}>{collaborator.name}({collaborator.email})</option>
              )
            }
  
          </Form.Select>
          <div className='d-flex justify-content-center mt-3'>
            <Button type="submit" variant="outline-warning">
              <i className="bi bi-plus-circle-fill text-worning me-2"></i>
              Add Todo</Button>
          </div>
        </Form>
      </Container>
    )
}

export default UpdateTodo