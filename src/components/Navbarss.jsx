import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Image } from "react-bootstrap";
import {Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


function Navbarss() {
  return (
              <div>
                    <Navbar bg="light" expand="lg" style={{ padding: "15px", position: "fixed", top: "0px",left: "0px", right: "0px", zIndex: "1000"}}>
                    <Container>
                        <Link to="/">
                        <Image src="images/logo1.svg" width="150" height="25" alt="calendly"/>
                            </Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto"  defaultActiveKey="/" as="ul">
                        <Nav.Item as="li">
                            <Link  style={{marginRight: "1rem", color: "black", textDecorationLine: "none"}} to="individual">Individual</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Link  style={{marginRight: "1rem", color: "black", textDecorationLine: "none"}} to="teams">Teams</Link>
                            </Nav.Item>
                            <Nav.Item as="li">
                            <Link  style={{marginRight: "1rem", color: "black", textDecorationLine: "none"}} to="enterprise">Enterprise</Link>
                            </Nav.Item>
                        </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </div>
        )
    }

export default Navbarss;