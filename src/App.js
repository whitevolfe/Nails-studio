import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Home from './Pages/Home' // This is case-sensitive
import Services from './Pages/Services'
import Gallery from './Pages/Gallery'
import Booking from './Pages/Booking'
import Contact from './Pages/Contact'
import About from './Pages/About' // Corrected the case to match the file name
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar bg="light" expand="lg" className="mb-4">
          <Container>
            <Navbar.Brand href="/">NailsByMI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/services">Services</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/booking">Booking</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>

        <footer className="bg-light text-center py-3 mt-4">
          <Container>
            <p>&copy; 2024 Nails By MI. All rights reserved.</p>
          </Container>
        </footer>
      </div>
    </Router>
  )
}
