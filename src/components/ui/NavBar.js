import React from "react";
import { Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {filterDone} from '../../redux/action'
import { useDispatch } from 'react-redux';
function NavBar({setSearch}) {
  const dispatch = useDispatch()
  
  return (
    <div className="mb-3">
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">ToDoList</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e)=> setSearch(e.target.value)}
            />
            <Form.Select aria-label="Default select example" onChange={e => dispatch(filterDone(e.target.value)) }>
              <option value={0} selected>Filter By</option>
              <option value={true}>Done</option>
              <option value={false}>Is not done</option>
            </Form.Select>
            
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;