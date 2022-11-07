import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

export const TopNav = () => {
  return (
    <Navbar bg="none" expand="md" className="to-nav">
      <Container>
        {/* <Navbar.Brand to="">Suresh</Navbar.Brand> */}
        <Link className="nav-link" to="/">Suresh</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          
            <Link className="nav-link" to="/skills">Skills</Link>
            <Link className="nav-link" to="/projects">Projects</Link>
            <Link className="nav-link" to="/about-me">About Me</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
