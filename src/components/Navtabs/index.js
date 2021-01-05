import React from 'react';
// import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from "react-bootstrap";
import './styles.css'

function Navtabs() {

    return (

      <Navbar bg="dark" variant="dark" expand="lg" className="navFont">
      <Navbar.Brand href="/">Shay Daniel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link href="/Portfolio">portfolio</Nav.Link>
          <Nav.Link href="/About">about</Nav.Link>
          <Nav.Link href="https://drive.google.com/file/d/1M46az7g_5E_D4fAkchgApDl7N1K41d3a/view?usp=sharing">resume</Nav.Link>

          {/* <Nav.Link href="/Resume">resume</Nav.Link> */}
        </Nav>       
      </Navbar.Collapse>
    </Navbar>
    );
}

export default Navtabs;