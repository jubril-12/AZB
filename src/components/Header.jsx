import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/7.png"
import "../styles/Header.css";

const Header = () => {
  return (
    <div>
      <Navbar expand="lg"  className="bg-body-dark ait">
        <Container id="av">
          <div>
            <Navbar.Brand href="#home" id="laga">
              <img src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto aw">
              <Link to="/" className="aws">Home</Link>
              <Link to="comp" className="aws">Company</Link>
              <Link to="ser" className="aws">Services</Link>
                <Link to="#contact" className="aws">Contact</Link>
                <Link to="/mart"className="aws">Marketing</Link>
            </Nav>
          </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
