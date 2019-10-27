import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import "./styles.css";

const Navigationbar = () => (
  <div className="navigationBar">
    <Navbar bg="light" variant="light">
      <Navbar.Brand>Changelog</Navbar.Brand>
      <Nav className="mr-auto">
        <Link to="/form">Описать обновление</Link>
        <Link to="/Lists">Список обновлений</Link>
      </Nav>
    </Navbar>
  </div>
);

export default Navigationbar;
