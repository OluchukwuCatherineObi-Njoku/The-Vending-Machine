import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from "next/link";
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import { useRouter } from 'next/router';

function BasicExample() {
  
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();
  
    return (
      <Navbar bg="dark" expand="lg" className="fixed-top navbar-dark bg-primary">
        <Container>
          <Navbar.Brand>The Vending Machine</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior><Nav.Link active={router.pathname === "/"}>Home</Nav.Link></Link>
            </Nav>
           <Nav> 
          <NavDropdown title="User Name" id="basic-nav-dropdown">
          <Link href="/favourites" passHref legacyBehavior><NavDropdown.Item active={router.pathname === "/favourites"}>Favourites</NavDropdown.Item></Link>
          <Link href="/history" passHref legacyBehavior><NavDropdown.Item active={router.pathname === "/history"}>Search History</NavDropdown.Item></Link>
            </NavDropdown>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

  export default function MainNav(){

    return (
        <div>
        <BasicExample /> 
        <br />
        <br /> 
        <br />
        </div>      
    )
}