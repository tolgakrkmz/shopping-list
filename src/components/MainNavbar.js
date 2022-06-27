import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function MainNavbar() {
  const userIsLogged = useSelector((state) => state.user.isLogged);
  const firstName = useSelector((state) => state.user.userName);

  return (
    <Navbar>
      <Container>
        <Navbar.Text>
          <Link to="/shopping-list">Shopping List</Link>
        </Navbar.Text>
        /
        {userIsLogged && (
          <Navbar.Text>
            <Link to="">My List</Link>
          </Navbar.Text>
        )}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {userIsLogged ? (
            <Navbar.Text>
              <p>{firstName}</p>
            </Navbar.Text>
          ) : (
            <Navbar.Text>
              <Link to="/login">Login</Link>
            </Navbar.Text>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;
