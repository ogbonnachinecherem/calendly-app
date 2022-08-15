import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';
// import { useHistory } from "react-router-dom";

function Navbars() {
  return (
    <div>
        <Nav className="navbar navheadi navbar-expand-lg navbar-light bg-light">
  <Link className="navbar-brand" to="/">
<img src="images/logo1.svg" width="300" height="40" alt=""/></Link>
  <Button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </Button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <Nav.Item as="li">
        <Link className={isActive =>"nav-link" + (!isActive ? "selected" : "black")} 
        to="/individual">Individual<span className="sr-only">(current)</span></Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="nav-link" to="/teams">Teams</Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Link className="nav-link" to="/enterprise">Enterprise</Link>
      </Nav.Item>
    </ul>
  </div>
</Nav>
    </div>
  )
}

export default Navbars;