import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/7.png";

const Header = () => {
  return (
    <div className="wis">
      <Navbar expand="md" className="bg-body-secondary">
        <Container  id="cont">
          <Link id="home" to="/">
            <Navbar.Brand id="comp">
              <img src={logo} alt="" />
            </Navbar.Brand>
          </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto" id="nav">
                <Link className="link" to="/">
                  Home
                </Link>
                <Link className="link" to="/ser">
                  Services
                </Link>
                <Link className="link" to="/comp">
                  Company 
                </Link>
                <Link className="link" to="/mart">
                  Marketing
                </Link>
                <Link className="link" to="/cont">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
