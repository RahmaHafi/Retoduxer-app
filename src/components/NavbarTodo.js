
import React from 'react'
import {NavLink} from 'react-router-dom'


import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import logo from '../assets/todo-nav-logo.jpg'


function NavbarTodo() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="logo" width={80} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <NavLink className="mx-3 navLink"  to="/">My Todos</NavLink>
                        <NavLink className="mx-3 navLink"  to="/colloaborators">Collaborators</NavLink>
                        <NavLink className="mx-3 navLink" to="/new-todo">New Todo</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarTodo