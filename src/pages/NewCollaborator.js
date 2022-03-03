import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux'
import { addCollaborator } from '../redux/actions/collaboratorsActionCreator'


function NewCollaborator(props) {
    const dispatch = useDispatch()
    const [formData, setFormdata] = useState({
        name: '',
        email: '',
        username: '',
        phone: ''
    })

    const handleFormChange = (e) => {
        setFormdata(prevData => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name.trim() && formData.email.trim() && formData.username.trim() && formData.phone.trim()) {
            dispatch(addCollaborator(formData))
            props.history.push("/colloaborators")
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                        value={formData.name}
                        name="name"
                        onChange={handleFormChange}
                        type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={formData.email}
                        name="email"
                        onChange={handleFormChange}
                        type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        value={formData.username}
                        name="username"
                        onChange={handleFormChange}
                        type="text" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        value={formData.phone}
                        name="phone"
                        onChange={handleFormChange}
                        type="text" />
                </Form.Group>
                <div className='d-flex justify-content-center'>
                    <Button type="submit" variant="outline-warning">
                        <i className="bi bi-plus-circle-fill text-worning me-2"></i>
                        Add </Button>
                </div>
            </Form>
        </Container>
    )
}

export default NewCollaborator