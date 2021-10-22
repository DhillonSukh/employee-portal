import React from 'react';
import { Container, Navbar ,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const EmployeeHeader : React.FC = () =>{
  return (<div className="grid mt-10">
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand><Link to="/" className="navbar-brand">Employee Portal</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/employee-list"  className="nav-link">Employee List</Link>
                <Link to="/about"  className="nav-link">About</Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  </div>);
}

export default EmployeeHeader;