import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

function NavBarComponent(){
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#project">Project</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#contests">Coding-Contests</Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default NavBarComponent;