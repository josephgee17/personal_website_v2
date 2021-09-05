import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { RootState, Dispatch } from "../../../store";
import { Navbar, Container, Nav } from "react-bootstrap";
import styles from "./header.module.css";

export const Header: React.FC = (): JSX.Element => (
    <div className={styles.header}>
      <Navbar
        className={styles.semiT}
        bg="dark"
        variant="dark"
        style={{
          position: "fixed",
          zIndex: 99,
          minWidth: "120em",
          opacity: 0.75,
        }}
      >
        <Container style={{ marginLeft: "5em" }}>
          <Navbar.Brand href="">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/">TBD</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
