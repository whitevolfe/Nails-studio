import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import Footer from './Components/Footer'; // adjusted the path based on the folder structure

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
      <div className="d-flex flex-column min-vh-100" >
        <Navbar expand="lg" className="mb-4">
          <Container >
            <Navbar.Brand href="/">NailsByMI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" >
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

        <div className="whatsapp-icon" style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000 }}>
        <a href="https://wa.me/+94779556605" target="_blank" rel="noopener noreferrer" id="getbutton-whatsapp" className="q8c6tt-0 hhJKtG">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: '56px', height: '56px', fill: 'rgb(255, 255, 255)', stroke: 'none',marginLeft:'-5px',marginTop:"-5px"}}>
            <path d="M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path>
          </svg>
        </a>
      </div>

        <Footer />
      </div>
    </Router>
  )
}
