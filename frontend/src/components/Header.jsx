import React from "react";

import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";
export default function Header() {
  // @REDUX
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <LinkContainer to={"/"}>
          <Container>
            <Navbar.Brand href="/">E-commerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-nav-bar" />
            <Navbar.Collapse>
              <Nav className="ms-auto">
                <LinkContainer to={"/"}>
                  <Nav.Link href="/cart">
                    <FaShoppingCart />
                    Cart
                    {cartItems.length > 0 && (
                      <Badge pill bg="success" style={{ marginLeft: "5px" }}>
                        {cartItems.reduce((acc, item) => acc + item.qty, 0)}
                      </Badge>
                    )}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/login"}>
                  <Nav.Link href="/login">
                    <FaUser />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </LinkContainer>
      </Navbar>
    </header>
  );
}
