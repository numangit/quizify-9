import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoNav from './logo.png';
import './Navigate.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed } from '@fortawesome/free-solid-svg-icons';

const Navigate = () => {
    return (
        <div>
            <Navbar className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" bg="dark" expand="lg">
                <Container>
                    <Link className="navbar-brand " to="/">
                        <span className='fw-bolder fs-4'> Quiz<span className='text-success'>ify..</span><FontAwesomeIcon icon={faFeatherPointed} /></span></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-1">
                            <ul className="navbar-nav">
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} aria-current="page" to="home">Home</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} aria-current="page" to="/topic">Topics</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} to="/statistics">statistics</NavLink>
                                </li>
                                <li className="nav-item text-center mx-lg-2">
                                    <NavLink className={({ isActive }) => isActive ? 'active-nav nav-link fw-semibold' : 'nav-link'} to="/blog">Blogs</NavLink>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Navigate;