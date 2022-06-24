import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MainNavbar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Text>
          <Link to="/shopping-list">Shopping List</Link>
        </Navbar.Text>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
          <Navbar.Text>
            <Link to="/login">Login</Link>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
