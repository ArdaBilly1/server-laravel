import React from 'react';
import { Link } from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';



 
const Header = () => (
    <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Todo Apps</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create">create</Nav.Link>
      <Nav.Link href="/student">Student</Nav.Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
    </Nav>
    </Navbar>
)
 
export default Header