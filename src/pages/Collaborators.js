import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CollaboraotrCard from '../components/CollaboraotrCard';


function Collaborators() {

  const collaborators = useSelector(state => state.collaborators)
 const [email,setEmail]= useState('')
  return (
    <Container>
      <div className='d-flex mt-5 justify-content-end container'>
        <Link to="/new-collaborator">
          <Button variant="warning" type="submit">
            Add collaborator
          </Button>
        </Link>
      </div>
      <Form>
        <div className='row mt-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control placeholder="Enter email"  value={email} onChange={(e)=> setEmail(e.target.value)}/>
            <Form.Text className="text-muted">
              Filter collaborators by email.
            </Form.Text>
          </Form.Group>
        </div>
      </Form>
      <div className='row mt-5 pb-5'>
      {
        collaborators.filter(collaborator=> collaborator.email.includes(email)).map((collaborator)=><CollaboraotrCard key={collaborator.id} collaborator={collaborator}/>)
      }
      </div>
    </Container>

  )
}

export default Collaborators