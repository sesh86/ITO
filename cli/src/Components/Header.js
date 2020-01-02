import React, { Component } from 'react';
import {Nav,Navbar,NavDropdown} from 'react-bootstrap'

class Header extends Component {

    render()
    {
        return(<header>
<Navbar expand="lg" bg="dark" className="bg-darkblue">
  <Navbar.Brand href="#home">iTrain</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav>
    <NavDropdown title="Browse Categories" id="collapsible-nav-dropdown" className="btn btn-outline-darkblue" >
        <NavDropdown.Item href="#action/3.1">UI</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">Data Science</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Machine Learning</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Artificial Intelligence</NavDropdown.Item>
    </NavDropdown>
      <Nav.Link href="#pricing"><input className="form-control nb_search input-group-lg" type="text" placeholder="Search for Courses"/></Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>          
          </header>)
}
}

export default Header;