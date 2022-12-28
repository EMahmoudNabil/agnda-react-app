import React from "react";
import { Col, Form, FormControl, Nav, Navbar, Row } from "react-bootstrap";
import { useNavbarHook } from "../hooks/useNavbarHook";
import Toggle from "./Toggle";

const NavBar = ({ handleSearch, personData, theme, toggleTheme }) => {
  const [onSearch] = useNavbarHook({ handleSearch });
  return (
    <Row>
      <Col sm="12">
        <Navbar bg={theme} variant={theme} expand="lg" className="container">
          <Navbar.Brand href="#" className="title">
            اجندتي
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex  justify-content-between">
              <FormControl
                type="text"
                placeholder="ابحث هنا"
                className="me-1"
                onChange={(e) => onSearch(e.target.value)}
              />
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
};

export default NavBar;
