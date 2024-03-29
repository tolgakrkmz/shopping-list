import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./MainNavbar.css";

function MainNavbar() {
  const isUserLogged = useSelector((state) => state.user.isLogged);
  const userName = useSelector((state) => state.user.userName);

  return (
    <Navbar>
      <Container>
        <Navbar.Text className="nav-text">
          <Link to="/shopping-list">Shopping List</Link>
        </Navbar.Text>
        {isUserLogged && (
          <Navbar.Text className="nav-text">
            <Link to="/shopping-list">My List</Link>
          </Navbar.Text>
        )}
        {isUserLogged && (
          <Navbar.Text className="nav-text">
            <Link to="/products">Products</Link>
          </Navbar.Text>
        )}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {isUserLogged ? (
            <Navbar.Text>{userName}</Navbar.Text>
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
