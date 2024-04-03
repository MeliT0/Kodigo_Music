import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/images/KM-logo.png';

export const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/"> <img src={logo} alt="logo" />Kodigo Music</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/listadoCanciones">Listado de canciones</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
  )
}

 