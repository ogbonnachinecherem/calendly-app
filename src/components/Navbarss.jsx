import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';


function Navbarss() {
  return (
            <div>
                <Navbar  expand="lg">
            <Nav className="mr-auto" defaultActiveKey="/" as="ul" 
                style={{ padding: "15px", position: "fixed", top: "0px",left: "0px", right: "0px", 
                zIndex: "1000", backgroundColor:"#F8F9FA"}} >
                <Nav.Item as="li">
                <Link style={{marginRight: "1rem", color: "black"}} to="/">
                <Image src="images/logo1.svg" width="300" height="40" alt=""/>
                    </Link>
                </Nav.Item>
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
        </Navbar>
            </div>
  
  )
}

export default Navbarss;